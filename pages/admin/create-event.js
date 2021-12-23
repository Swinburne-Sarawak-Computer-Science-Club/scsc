import Link from 'next/link';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { Button, Form, Loader } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import Navbar from './components/Navbar'
import Js from "../../components/Js"

import Head from "next/head"

const NewEvent = () => {
    const [form, setForm] = useState({ title: '',  date: '', time: '', venue: '', description: '', link: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const router = useRouter();

    useEffect(() => {
        if (isSubmitting) {
            if (Object.keys(errors).length === 0) {
                createEvent();
            }
            else {
                setIsSubmitting(false);
            }
        }
    }, [errors])

    const createEvent = async () => {
        try {
            const res = await fetch('https://swinburne-sarawak-compsci-club.herokuapp.com/api/events', {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            })
            router.push("/admin/event");
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let errs = validate();
        setErrors(errs);
        setIsSubmitting(true);
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const validate = () => {
        let err = {};

        if (!form.title) {
            err.title = 'Title is required';
        }
        if (!form.date) {
            err.description = 'Date is required';
        }

        if (!form.time) {
            err.description = 'Time is required';
        }
        if (!form.venue) {
            err.description = 'Venue is required';
        }

        if (!form.description) {
            err.description = 'Description is required';
        }
        if (!form.link) {
            err.description = 'Registration link is required';
        }

        return err;
    }

    return (
        <body>
				<Head>
					<title>Admin Dashboard | Create Event</title>
					<meta
						name="description"
						content="SCSC was founded in April 2018 by Aylwin Sim and Hovah Yii. The club later was passed to Dr. Mark Tee Kit Tsun by the end of 2018. Since then, SCSC has been collaborating with IEEE, Robotics clubs to organise activities..."
					/>
					<meta
						name="keywords"
						content="SCSC, About SCSC, Swinburne Computer Science Club, SCSC Sarawak, Swinburne CompSci Club, History, what we provide, we provide you"
					/>
					<meta name="author" content="Hovah Yii" />
				</Head>

				<Js />

				<div className="container-fluid">
					<div className="row">
						<Navbar />
						<main className="col-md markdown-body">
						     <h1>Event Details:</h1>

            <h2>Create Event</h2>
            <div>
                {
                    isSubmitting
                        ? <Loader active inline='centered' />
                        : <Form onSubmit={handleSubmit}>
                            <Form.Input
                           
                                fluid
                                error={errors.title ? { content: 'Please enter a title', pointing: 'below' } : null}
                                label='Title'
                                placeholder='Title'
                                name='title'
                                onChange={handleChange}
                            />
                                <Form.Input
                                fluid
                                error={errors.date ? { content: 'Please enter a date', pointing: 'below' } : null}
                                label='Date'
                                placeholder='Date'
                                name='date'
                                onChange={handleChange}
                            />
                                <Form.Input
                                fluid
                                error={errors.time ? { content: 'Please enter a time', pointing: 'below' } : null}
                                label='Time'
                                placeholder='Time'
                                name='time'
                                onChange={handleChange}
                            />
                                <Form.Input
                                fluid
                                error={errors.venue ? { content: 'Please enter a venue', pointing: 'below' } : null}
                                label='Venue'
                                placeholder='Venue'
                                name='venue'
                                onChange={handleChange}
                            />
                            <Form.TextArea
                                fluid
                                label='Descriprtion'
                                placeholder='Description'
                                name='description'
                                error={errors.description ? { content: 'Please enter a description', pointing: 'below' } : null}
                                onChange={handleChange}
                            />
                             <Form.Input
                                fluid
                                error={errors.date ? { content: 'Please enter the registration link', pointing: 'below' } : null}
                                label='Registation link'
                                placeholder='Registation ink'
                                name='link'
                                onChange={handleChange}
                            />
                            <Button type='submit'>Create</Button>
                        </Form>
                }
            </div>
						</main>
					</div>
				</div>
			</body>
  
    )
}

export default NewEvent;

