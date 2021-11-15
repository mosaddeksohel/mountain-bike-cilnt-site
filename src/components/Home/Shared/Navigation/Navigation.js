import React from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../../Hook/useAuth';


const Navigation = () => {
    const { user, Logout } = useAuth();
    return (

        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Navbar with text</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <NavLink to="/dashboard">
                        <Button>Dashboard</Button>
                    </NavLink>
                    <NavLink style={{ backgroundColor: 'none', color: 'white' }} to="/register">
                        <Button>Register</Button>
                    </NavLink>
                    {
                        user.email ?
                            <Button onClick={Logout}>Logout</Button>
                            : <NavLink to="/login">
                                <Button>Login</Button>
                            </NavLink>
                    }

                </Navbar.Collapse>
            </Container>
        </Navbar>


    );
};

export default Navigation;