import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Blog.css'


const Blog = () => {
    return (
        <Accordion className='accordion' defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header> Difference between authorization and authentication</Accordion.Header>
                <Accordion.Body>
                    <h3>Authentication</h3>
                    <p>In authentication process, the identity of users are checked for providing the access to the system.In authentication process, users or persons are verified.It is done before the authorization process.</p>
                    <h3>Authorization</h3>
                    <p>While in authorization process, person's or user's authorities are checked for accessing the resources.While in this process, users or persons are validated.While this process is done after the authentication process.</p>

                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header> Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                <Accordion.Body>
                    <p>The Firebase Realtime Database lets build rich, collaborative applications by allowing secure access to the database directly from client-side code.Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default Blog;