import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [data, setData] = useState({});

    async function signIn({ email, password }) {

        try {
            const response = await api.post("/sessions", { email, password });
            const { token, user } = response.data;

            localStorage.setItem('@RocketMovies:token', token);
            localStorage.setItem('@RocketMovies:user', JSON.stringify(user));

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setData({ token, user });

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possível entrar")
            }
        }
    }

    async function signOut() {
        localStorage.removeItem('@RocketMovies:token');
        localStorage.removeItem('@RocketMovies:user');

        setData({});
    }

    async function updateProfile({ user, avatarFile }) {
        try {
            if (avatarFile) {
                const fileUploadForm = new FormData();
                fileUploadForm.append('avatar', avatarFile);

                const response = await api.patch("/users/avatar", fileUploadForm);
                user.avatar = response.data.avatar;
            }

            await api.put("/users", user);

            const response = await api.get("/users");
            user = response.data;
            localStorage.setItem('@RocketMovies:user', JSON.stringify(response.data));

            setData({ token: data.token, user });
            alert('Updated profile successfully!');

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert("Unable to update profile.")
            }
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('@RocketMovies:token');
        const user = localStorage.getItem('@RocketMovies:user');

        if (token && user) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setData({ token, user: JSON.parse(user) });
        }
    }, []);

    return (
        <AuthContext.Provider value={{
            signIn,
            signOut,
            user: 
                data.user,
            updateProfile
        }}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuth}