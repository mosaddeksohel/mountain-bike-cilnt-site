import { Box } from '@mui/system';
import React from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../../Hook/useAuth';


const Navigation = () => {
    const { user, Logout } = useAuth();
    return (

        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Mountain Bike</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <NavLink to="/dashboard">
                        <Button className="bg-black">Dashboard</Button>
                    </NavLink>
                    <NavLink to="/explore">
                        <Button className="bg-black">Galary</Button>
                    </NavLink>

                    {
                        user.email ?


                            <Button className="bg-black" onClick={Logout}>Logout</Button>

                            :
                            <Box>
                                <NavLink to="/register">
                                    <Button className="bg-black">Register</Button>
                                </NavLink>
                                <NavLink to="/login">
                                    <Button className="bg-black">Login</Button>
                                </NavLink>
                            </Box>
                    }

                </Navbar.Collapse>
            </Container>
        </Navbar>


    );
};

export default Navigation;