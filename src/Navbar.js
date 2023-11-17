import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function CustomNavbar() {
    return (
        <Navbar bg='light' expand='lg'>
            <Navbar.Brand as={Link} to='/'>
            <img src={process.env.PUBLIC_URL +`/logo.png`} width='100px' height='100px' alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='mr-auto'>
                    <Nav.Link as={Link} to='/'>
                        TP1
                    </Nav.Link>
                    <Nav.Link as={Link} to='/TP2'>
                        TP2
                    </Nav.Link>
                    <Nav.Link as={Link} to='/TP3'>
                        TP3
                    </Nav.Link>
                    <Nav.Link as={Link} to='/TP4'>
                        TP4
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

