import { useState } from 'react';
import { Container, Form, Background } from './styles';
import { FiMail, FiLock } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { Input} from '../../components/Input';
import { Button} from '../../components/Button';

export function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signIn } = useAuth();

    const navigate = useNavigate();

    function handleSignIn() {

        signIn({
            email,
            password
        });

        navigate("/")
    }

    return (
        <Container>
            <Form>
                
                <h1>RocketMovies</h1>
                <p>Save and manage your favorite movies.</p>

                <h2>Please, login!</h2>

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />

                <Button title="Entrar" onClick={ handleSignIn } />

                <Link to="/register">
                    Sign up
                </Link>

            </Form>
            
            <Background />

        </Container>
    );
}