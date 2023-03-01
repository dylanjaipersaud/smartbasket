import { useState } from 'react';
import { Drawer } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const openDrawer = () => {
        setOpen(!open);
    }
    return (  
        <div className="navbar">
            <IconButton onClick={openDrawer}>
                <MenuIcon/>
            </IconButton>
            <Drawer
                anchor='left'
                open={open}
                onClose={openDrawer}
            ></Drawer>
        </div>
     );
}

export default Navbar;