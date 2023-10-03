import { Container, Content, Avatar } from './styles';

import { FiArrowLeft, FiClock } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";

import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Rate } from '../../components/Rate';
import { Tag } from '../../components/Tag';

import emptyImage from "../../assets/empty-profile.png";

export function Details() {
    const [movie, setMovie] = useState(null);

    const params = useParams();

    const avatarUrl = movie ? movie.user ? movie.user.avatar ? `${api.defaults.baseURL}files/${movie.user.avatar}` : emptyImage : emptyImage : emptyImage;

    useEffect(() => {
        async function fetchNote() {
            const response = await api.get(`/notes/${params.id}`);
            setMovie(response.data); console.log(response.data);
        }

        fetchNote();
    }, []);

    return (
        <Container>
            <Header />

            <main>
                <Content>

                    <header>
                        <Link to="/">
                            <div>
                                <FiArrowLeft />
                                back                        
                            </div>

                        </Link>
                    </header>

                    <Section title={movie && movie.title}>
                        <div>
                            <Rate rate={"movie && movie.rate"}/>
                        </div>
                    </Section>

                    <div className="author">
                        <Avatar>
                            <img 
                                src={avatarUrl} 
                                alt={`Foto do usuário ${movie && movie.name}`}
                            />
                        </Avatar>

                        <span>Por {movie && movie.user.name}</span>

                        <FiClock  color="#FF859B"/>

                        <span>{movie && movie.updated_at}</span>
                    </div>

                    <div>
                        {movie && movie.tags.map(tag => <Tag key={tag.id} title={tag.name} />)}
                    </div>

                    <p>
                        {movie && movie.description}
                    </p>
                </Content>
            </main>
        </Container>
    )
}