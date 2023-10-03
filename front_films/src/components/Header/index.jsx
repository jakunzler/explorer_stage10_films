import { Container, Brand, Search, Profile, Logout, Avatar } from "./styles";
import { Input } from "../Input";
import emptyImage from "../../assets/empty-profile.png";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

export function Header(props) {
    const { signOut, user } = useAuth();
    const { onInputChange } = props;

    const handleInput = async (event) => {
        const newValue = event.target.value; console.log(newValue);
        const response = await api.get(`/notes?title=${newValue}`);

        console.log(response.data);
        onInputChange(response.data);
    };

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}files/${user.avatar}` : emptyImage;

    return(
        <Container>
            <Brand to="/">
                <h1>RocketMovies</h1>
            </Brand>

            <Search>
                <Input 
                    placeholder="Enter the title of the movie"
                    onChange={ handleInput }
                />
            </Search>

            <Profile>
                <div>
                    <strong>{user.name}</strong>
                    <Logout onClick={ signOut }>
                        logout
                    </Logout>
                </div>

                <Avatar to="/profile">
                    <img 
                        src={avatarUrl} 
                        alt={`Foto do usuário ${user.name}`}
                    />

                </Avatar>
            </Profile>
        </Container>
    )
}