import React from 'react';
import 'react-router-dom';
import { Navbar, Form, FormControl, Nav } from 'react-bootstrap';

function Navigation() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Virtual Tutor</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/search">Search</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Subject Search" className="mr-sm-2" />                </Form>
                <Form inline>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;