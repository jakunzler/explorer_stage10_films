import { FiArrowLeft } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { Container, Form } from './styles';

import { Header } from '../../components/Header';
import { Input} from '../../components/Input';
import { Button} from '../../components/Button';
import { TextArea } from '../../components/TextArea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';

import { api } from '../../services/api';

export function New() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [rate, setRate] = useState('');

    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState('');

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState('');

    const navigate = useNavigate();

    function handleAddLink() {
        setLinks( prevState => [...prevState, newLink]);
        setNewLink('');
    }

    function handleRemoveLink(deletedLink) {
        setLinks( prevState => prevState.filter(item => item !== deletedLink));
    }

    function handleAddTag() {
        setTags( prevState => [...prevState, newTag]);
        setNewTag('');
    }

    function handleRemoveTag(deletedTag) {
        setTags( prevState => prevState.filter(item => item !== deletedTag));
    }

    async function handleNewNote() {
        if(!title) {
            return alert('Title is required!')
        }

        if(newLink) {
            return alert('There is a link that has not been added!')
        }

        if(newTag) {
            return alert('There is a tag that has not been added!')
        }

        const note = {
            title,
            description,
            rate,
            links,
            tags
        }

        const response = await api.post('/notes', note);

        alert(response.data.message);
        navigate(-1);
    }

    async function handleDeleteNote() {

        const confirmation = confirm('Are you sure you want to cancel?');

        if(confirmation) {
            navigate(-1);
        }
    }
 
    return (
        <Container>
            <Header/>
            
            <main>
                <Form>
                    <header>
                        <Link to="/">
                            <div>
                                <FiArrowLeft />
                                back                        
                            </div>

                        </Link>
                    </header>

                    <Section title="New Film">
                            
                        <div className='input'>
                            <Input
                                placeholder="Title"
                                onChange={e => setTitle(e.target.value)}
                            />

                            <Input
                                placeholder="Your rating (0-5)"
                                onChange={e => setRate(e.target.value)}
                            />
                        </div>

                        <TextArea
                            placeholder="Notes"
                            onChange={e => setDescription(e.target.value)}
                        />

                        <div className='markers'>
                            <h2>Tags</h2>

                            <section className='tags'>
                                {
                                    tags.map((tag, index) => (
                                        <NoteItem
                                            key={String(index)}
                                            value={tag}
                                            onClick={ () => handleRemoveTag(tag) }
                                        />
                                    ))
                                }
                                <NoteItem
                                    isNew
                                    placeholder="tag a term"
                                    value={newTag}
                                    onChange={e => setNewTag(e.target.value)}
                                    onClick={ handleAddTag }
                                />
                            </section>
                            
                        </div>

                        <section className='links'>
                            <h2>Links</h2>

                            <div className='link'>
                                {
                                    links.map((link, index) => (
                                        <NoteItem
                                            key={String(index)}
                                            value={link}
                                            onClick={ () => handleRemoveLink(link) }
                                        />
                                    ))
                                }
                                <NoteItem
                                    isNew
                                    placeholder="insert link"
                                    value={newLink}
                                    onChange={e => setNewLink(e.target.value)}
                                    onClick={ handleAddLink }
                                />
                            </div>
                            
                        </section>

                        <div className='button'>
                            <Button 
                                title="Cancel" 
                                onClick={ handleDeleteNote }
                                className='delete'
                            />

                            <Button 
                                title="Save modifications" 
                                onClick={ handleNewNote }
                            />
                        </div>
                        
                    </Section>
                </Form>
            </main>
        </Container>
    );
}