// import ItemData from './ItemData'
import Box from '@mui/material/Box';
// import * as MUI from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import { useState } from 'react';
// import { Link}  from 'react-router-dom';
const CartView = () => {

    const [items, setItems] = useState([
        {
            id: 1,
            uid: 1234,
            name: 'Coffee Cup',
            short_description: 'Simple Coffee Cup',
            long_description: 'Single 8oz Coffee Cup\nWhite and Brown\nMicrowave Safe\nStores hot and cold liquids',
            stock: 100,
            image: 'https://www.seekpng.com/png/detail/265-2655373_coffee-to-go-png-paper-coffee-cup.png',
            price: 6.25,
        },
        {
            id: 2,
            uid: 5678,
            name: 'Notebook',
            short_description: 'Blank Page notebook',
            long_description: 'Single blank page notebook\n7in by 5in size\nWhite pages and Brown cover\n100 pages',
            stock: 200,
            image: 'https://i.pinimg.com/originals/5c/d0/7c/5cd07c600075034d00d483371c2a18ec.jpg',
            price: 3,
        },
        {
            id: 3,
            uid: 9012,
            name: '6-Pack Pen',
            short_description: 'Pack of 6 pens',
            long_description: 'Pack of 6 pens\nIncludes black, green, blue, red, light blue, and light green\nBallpoint tips\nDetaachable caps',
            stock: 150,
            image: 'https://www.meijer.com/content/dam/meijer/product/0070/33/0196/27/0070330196278_a1c1_1200.png',
            price: 3.50,
        },
    ]);
    const item_style = {
        backgroundColor: '#eee',
        padding: '10px',
        width: '80%',
        height: '130px',
        marginBottom: '10px',
        display: 'flex',
    }
    return (
        <div className='cartview-main'>
            <h1 className='cart-title'>Shopping Cart</h1>
            <div className='cart-item-list'>
                {items.map((item) => (
                    <Card variant='outlined' sx={item_style}>
                        <CardMedia
                            component="img"
                            sx={{ width: "40%" }}
                            image={item.image}
                            alt={item.name}>
                        </CardMedia>
                        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'space-between' }}>
                            <CardContent >
                                <Typography component="div" variant="h5">
                                    {item.name}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    {item.short_description}
                                </Typography>
                                <br />
                                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography component="div" variant="subtitle2" color="text.secondary">
                                        Quantity: {item.stock}
                                    </Typography>
                                    <Typography variant="subtitle2" color="text" component="div">
                                        ${item.price}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Box>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default CartView;