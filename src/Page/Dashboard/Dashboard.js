import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useAuth from '../../Hook/useAuth';
import { NavLink, } from 'react-bootstrap';


import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import MyOrders from './MyOrders/MyOrders';
import Reviews from './Reviews/Reviews';
import AddProducts from './AddProducts/AddProducts';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageProducts from './ManageProducts/ManageProducts';
import ManageOrders from './ManageAllOrders/ManageOrders';
import Payment from './Pay/Pay';
import AdminRoute from '../PrivateRoute/AdminRoute';


const drawerWidth = 200;

function Dashboard(props) {
    const { Logout, admin } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    <NavLink></NavLink>
    const drawer = (
        <div >
            <Toolbar />
            <Divider />
            {!admin ?
                <Box >
                    <Link to={`${url}`}><Button color="inherit">Dashboard</Button></Link>
                    <br />
                    <Link to={`${url}/pay`}><Button color="inherit">Pay</Button></Link>
                    <br />
                    <Link to={`${url}/myorders`}><Button color="inherit">My Order</Button></Link>
                    <br />
                    <Link to={`${url}/reviews`}><Button color="inherit">Reviews</Button></Link>
                    <br />
                </Box>

                : <Box>
                    <Link to={`${url}/makeadmin`}><Button color="inherit">Make Admin</Button></Link>
                    <br />
                    <Link to={`${url}/addproducts`}><Button color="inherit">Add Product</Button></Link>
                    <br />
                    <Link to={`${url}/manageproducts`}><Button color="inherit">Manage Products</Button></Link>
                    <br />
                    <Link to={`${url}/manageallorders`}><Button color="inherit">Manage All Orders</Button></Link>
                </Box>
            }

        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Typography variant="h6" noWrap component="div">
                            Dashboard
                        </Typography>
                        <Typography variant="h6" noWrap component="div">
                            <Button onClick={Logout}>Logout</Button>
                        </Typography></div>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route path={`${path}/myorders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Payment></Payment>
                    </Route>
                    <Route path={`${path}/reviews`}>
                        <Reviews></Reviews>
                    </Route>
                    <AdminRoute path={`${path}/addproducts`}>
                        <AddProducts></AddProducts>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageallorders`}>
                        <ManageOrders></ManageOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeadmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageproducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                </Switch>


            </Box>
        </Box >
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
