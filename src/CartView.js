import Box from '@mui/material/Box';
// import * as MUI from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
const CartView = () => {

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
                <Card variant='outlined' sx={item_style}>
                    <CardMedia
                        component="img"
                        sx={{ width: "40%"  }}
                        image="https://www.seekpng.com/png/detail/265-2655373_coffee-to-go-png-paper-coffee-cup.png"
                        alt="Live from space album cover">
                    </CardMedia>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent >
                            <Typography component="div" variant="h5">
                                Coffee Cup
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                Simple Coffee Cup
                            </Typography>
                        </CardContent>
                    </Box>
                </Card>

                <Card variant='outlined' sx={item_style}>
                    <CardMedia
                        component="img"
                        sx={{ width: "40%" }}
                        image="https://i.pinimg.com/originals/5c/d0/7c/5cd07c600075034d00d483371c2a18ec.jpg"
                        alt="Live from space album cover">
                    </CardMedia>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent >
                            <Typography component="div" variant="h5">
                                Notebook
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                Single-lined notebook
                            </Typography>
                        </CardContent>
                    </Box>
                </Card>

                <Card variant='outlined' sx={item_style}>
                    <CardMedia
                        component="img"
                        sx={{ width: "40%" }}
                        image="https://www.meijer.com/content/dam/meijer/product/0070/33/0196/27/0070330196278_a1c1_1200.png"
                        alt="Live from space album cover">
                    </CardMedia>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent >
                            <Typography component="div" variant="h5">
                                6-Pack Pen
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                Pack of 6 pens
                            </Typography>
                        </CardContent>
                    </Box>
                </Card>

                <Card variant='outlined' sx={item_style}>
                    <CardMedia
                        component="img"
                        sx={{ width: "40%"  }}
                        image="https://www.seekpng.com/png/detail/265-2655373_coffee-to-go-png-paper-coffee-cup.png"
                        alt="Live from space album cover">
                    </CardMedia>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent >
                            <Typography component="div" variant="h5">
                                Coffee Cup
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                Simple Coffee Cup
                            </Typography>
                        </CardContent>
                    </Box>
                </Card>

                <Card variant='outlined' sx={item_style}>
                    <CardMedia
                        component="img"
                        sx={{ width: "40%" }}
                        image="https://i.pinimg.com/originals/5c/d0/7c/5cd07c600075034d00d483371c2a18ec.jpg"
                        alt="Live from space album cover">
                    </CardMedia>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent >
                            <Typography component="div" variant="h5">
                                Notebook
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                Single-lined notebook
                            </Typography>
                        </CardContent>
                    </Box>
                </Card>

                <Card variant='outlined' sx={item_style}>
                    <CardMedia
                        component="img"
                        sx={{ width: "40%" }}
                        image="https://www.meijer.com/content/dam/meijer/product/0070/33/0196/27/0070330196278_a1c1_1200.png"
                        alt="Live from space album cover">
                    </CardMedia>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent >
                            <Typography component="div" variant="h5">
                                6-Pack Pen
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                Pack of 6 pens
                            </Typography>
                        </CardContent>
                    </Box>
                </Card>

            </div>
        </div>
    );
}

export default CartView;