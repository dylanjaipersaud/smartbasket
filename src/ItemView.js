import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ItemView = () => {
    let { item } = useParams();
    const [itemData, setItemData] = useState(null);

    const items = [
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
            long_description: "Pack of 6 pens \n Includes black, green, blue, red, light blue, and light green\nBallpoint tips\nDetachable caps",
            stock: 150,
            image: 'https://www.meijer.com/content/dam/meijer/product/0070/33/0196/27/0070330196278_a1c1_1200.png',
            price: 3.50,
        },
    ];

    useEffect(() => {
        for (let i = 0; i < items.length; i++) {
            if (items[i].id == item) {
                setItemData(items[i]);
                // alert(itemData)
            }
        }
    }, []);

    return (
        <div>
            {itemData &&
                <div>
                    <Card variant="none" sx={{}}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            image={itemData.image}
                        />
                        <CardContent sx={{backgroundColor: "#eee", borderTop: "1px #eee inset"}}>
                            <Typography gutterBottom variant="h5" component="div">
                                {itemData.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {itemData.long_description}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            }
        </div>
    );
}

export default ItemView;