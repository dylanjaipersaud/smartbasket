import { useState } from 'react';
import { Drawer } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountIcon from '@mui/icons-material/AccountBox';
import BasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchIcon from '@mui/icons-material/Search';
import ConnectIcon from '@mui/icons-material/BluetoothConnected'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const openDrawer = () => {
        setOpen(!open);
    }
    return (
        <div className="navbar">
            <IconButton onClick={openDrawer}>
                <MenuIcon />
            </IconButton>
            <Drawer
                anchor='left'
                open={open}
                onClose={openDrawer}
            >
                <List>
                    <Link to="/basket" onClick={{ openDrawer }}>
                        <ListItem sx={{ paddingLeft: '0px' }}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <BasketIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    Basket
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </Link>

                    <ListItem sx={{ paddingLeft: '0px' }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <SearchIcon />
                            </ListItemIcon>
                            <ListItemText>
                                Search
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>

                    <ListItem sx={{ paddingLeft: '0px' }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <ConnectIcon />
                            </ListItemIcon>
                            <ListItemText>
                                Connection
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>

                    <ListItem sx={{ paddingLeft: '0px' }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <AccountIcon />
                            </ListItemIcon>
                            <ListItemText>
                                Account
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>

            </Drawer>
        </div>
    );
}

export default Navbar;