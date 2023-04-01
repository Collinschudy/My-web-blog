import './sendemail.styles.css';
import { useNavigate } from 'react-router-dom';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const service_id = `${process.env.REACT_APP_EMAILJS_SERVICE_ID}`;
    const template_id = `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`;
    const public_key = `${process.env.REACT_APP_EMAILJS_PUBLIC_KEY}`;

    const form = useRef();

    const handleSendEmail = async (e) => {
        e.preventDefault();

        try {
            await emailjs.sendForm(service_id, template_id, form.current, public_key);
            await alert('Your mesage has been successfully sent.');
            await navigate('/');
        } catch (error) {
            console.log(error.text);
        }
        setName("");
        setEmail("");
        setTitle("");
        setMessage("");
    };

    return (
        <div className="contactpage">
            <h3>Contact Me</h3>
            <div className="form-wrapper">
                <p>Hi friend, you can send me an email here</p>
                <form ref={form} onSubmit={handleSendEmail} className='form'>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        placeholder={name}
                        required
                    />

                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={email}
                        required
                    />

                    <label>Title</label>
                    <input
                        name="title"
                        type='text'
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder={title}
                       
                    />

                    <label>Message</label>
                    <textarea
                        name="message"
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder={message}
                        required
                    />

                    <input type="submit" value="Send" />
                </form>
            </div>
        </div>
    );
};

export default ContactUs;