import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Content } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Note } from "../../components/Note";
import { Section } from "../../components/Section";

import { api } from "../../services/api";

export function Home() {
    const [movies, setMovies] = useState(null);

    const navigate = useNavigate();

    function handleNewNote() {
        navigate("/new");
    }

    const handleInputChange = (newValue) => {
        setMovies(newValue);
    }

    //function to fetch notes from the server
    useEffect(() => {
        async function fetchNotes() {
            const response = await api.get("/notes");
            setMovies(response.data);
        }

        fetchNotes();
    }, []);

    return(
        <Container>
            <Header onInputChange = { handleInputChange } />

            <Content>
                <div>
                    <Button title="+ Add new" onClick={ handleNewNote } />                    
                </div>
                
                <Section title="My Movies" >
                    {
                        movies && movies.map((movie) => (
                            <Note
                                key={String(movie.id)}
                                data={
                                    {
                                        title: movie.title,
                                        description: movie.description,
                                        tags: movie.tags,
                                        rate: movie.rate,
                                    }
                                }
                                onClick={ () => navigate(`/details/${movie.id}`) }
                            />
                        ))
                    }
                </ Section>

            </Content>
        </Container>
    )
}