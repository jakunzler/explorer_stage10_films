import { useState } from 'react';
import { Container, Form, Background } from './styles';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

import { Input} from '../../components/Input';
import { Button} from '../../components/Button';

import { api } from '../../services/api';

export function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    function handleSignUp() {
        if(!name || !email || !password) {
            alert('Fill all fields!');
        }

        api.post("/users", {name, email, password})
        .then(() => {
            alert('User created successfully!');
            navigate('/');
        })
        .catch(() => {
            alert('Error creating user!');
        });
    }

    return (
        <Container>
            
            <Form>
                
                <h1>RocketMovies</h1>
                <p>Save and manage your favorite movies.</p>

                <h2>Sign up!</h2>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    onChange={(e) => setName(e.target.value)}
                />

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    onChange={(e) => setEmail(e.target.value)}

                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange={(e) => setPassword(e.target.value)}

                />

                <Button title="Register" onClick={ handleSignUp } />

                <Link to="/">
                    Back to login
                </Link>

            </Form>
            
            <Background />

        </Container>
    );
}