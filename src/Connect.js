import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
// import { Navigate } from "react-router-dom";
import Navbar from './Navbar';
// import ItemData from './ItemData'
import Box from '@mui/material/Box';
// import * as MUI from '@mui/material'
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Typography } from '@mui/material';

// window.connection = null;

const Connect = () => {
  var device = null;
  // var userCart = [];
  var tag1, tag2, tag3, tag4 = false;
  var RTag1, RTag2, RTag3, RTag4 = null;
  const [itemCount, setItemCount] = useState(0);
  const [userTotal, setUserTotal] = useState(0.0);
  const [itemDetails, setItemDetails] = useState(false);
  const [supportsBluetooth, setSupportsBluetooth] = useState(false);
  const [isDisconnected, setIsDisconnected] = useState(true);
  const [RFIDTagID1, setRFIDTagID1] = useState(null);
  const [RFIDTagID2, setRFIDTagID2] = useState(null);
  const [RFIDTagID3, setRFIDTagID3] = useState(null);
  const [RFIDTagID4, setRFIDTagID4] = useState(null);
  const [userCart, setUserCart] = useState([]);
  // const [RFIDTagIDString, setRFIDTagIDString] = useState(null);

  const [items, setItems] = useState([
    {
      id: 1,
      uid: "141 46 199 223",
      name: 'Playing Cards',
      short_description: 'Full Pack of Playing Cards',
      long_description: 'Single 8oz Coffee Cup\nWhite and Brown\nMicrowave Safe\nStores hot and cold liquids',
      stock: 100,
      image: 'https://images.heb.com/is/image/HEBGrocery/002595142-1',
      price: 4.50,
    },
    {
      id: 2,
      uid: "237 48 199 223",
      name: 'Notebook',
      short_description: 'Blank Page notebook',
      long_description: 'Single blank page notebook\n7in by 5in size\nWhite pages and Brown cover\n100 pages',
      stock: 200,
      image: 'https://i.pinimg.com/originals/5c/d0/7c/5cd07c600075034d00d483371c2a18ec.jpg',
      price: 6.25,
    },
    {
      id: 3,
      uid: "205 46 199 223",
      name: '2-Pack Pen',
      short_description: 'Pack of 2 pens',
      long_description: 'Pack of 2 pens\nIncludes black, green, blue, red, light blue, and light green\nBallpoint tips\nDetaachable caps',
      stock: 150,
      image: 'https://m.media-amazon.com/images/I/613iw43ZJYL._AC_UF894,1000_QL80_.jpg',
      price: 3.50,
    },
    {
      id: 4,
      uid: "226 16 66 25",
      name: 'Key Token',
      short_description: 'Blank Page notebook',
      long_description: 'Single blank page notebook\n7in by 5in size\nWhite pages and Brown cover\n100 pages',
      stock: 200,
      image: 'https://i.pinimg.com/originals/5c/d0/7c/5cd07c600075034d00d483371c2a18ec.jpg',
      price: 3,
    },
    {
      id: 5,
      uid: "3 57 67 47",
      name: 'Card Token',
      short_description: 'Pack of 6 pens',
      long_description: 'Pack of 6 pens\nIncludes black, green, blue, red, light blue, and light green\nBallpoint tips\nDetaachable caps',
      stock: 150,
      image: 'https://www.meijer.com/content/dam/meijer/product/0070/33/0196/27/0070330196278_a1c1_1200.png',
      price: 3.50,
    },
    {
      id: 6,
      uid: "13 55 199 223",
      name: 'iPhone Chargers',
      short_description: '3 Pack of iPhone Chargers',
      long_description: 'Single 8oz Coffee Cup\nWhite and Brown\nMicrowave Safe\nStores hot and cold liquids',
      stock: 100,
      image: 'https://cdn.shopify.com/s/files/1/0576/4526/9179/products/51Hz7z0kelL._AC_US1500.jpg?v=1678269559',
      price: 7.99,
    },
    {
      id: 7,
      uid: "109 48 199 223",
      name: 'Pack of Lolipops',
      short_description: '50 pack of lolipops',
      long_description: 'Single blank page notebook\n7in by 5in size\nWhite pages and Brown cover\n100 pages',
      stock: 200,
      image: 'https://m.media-amazon.com/images/I/61RTzF7GqeL._AC_.jpg',
      price: 10,
    },
    {
      id: 8,
      uid: "77 55 199 223",
      name: 'Toy Plushie',
      short_description: 'Orange Toy Plushie',
      long_description: 'Pack of 2 pens\nIncludes black, green, blue, red, light blue, and light green\nBallpoint tips\nDetaachable caps',
      stock: 150,
      image: 'https://www.plushisland.com/wp-content/uploads/2016/04/bun-bun-fox.jpg',
      price: 4.50,
    },
    {
      id: 9,
      uid: "173 48 199 223",
      name: 'Super Mario Toy',
      short_description: 'Super Mario Figure of Boo',
      long_description: 'Single blank page notebook\n7in by 5in size\nWhite pages and Brown cover\n100 pages',
      stock: 200,
      image: 'https://m.media-amazon.com/images/I/71+KBlKFR6L.jpg',
      price: 3,
    },
  ]);

  // When the component mounts, check that the browser supports Bluetooth
  useEffect(() => {
    if (navigator.bluetooth) {
      setSupportsBluetooth(true);
    }
  }, []);


  // Checks localstorage for an exisiting connection
  // useEffect(() => {
  //   if(tag1 && tag2 && tag3 && tag4){
  //     console.log("New Entry");
  //   }
  // }, []);

  function checkCartUpdate() {
    // alert("entered cart check");
    console.log(tag1 + " " + tag2 + " " + tag3 + " " + tag4);
    if (tag1 && tag2 && tag3 && tag4) {
      console.log("New Entry");
      tag1 = false;
      tag2 = false;
      tag3 = false;
      tag4 = false;
      console.log(tag1 + " " + tag2 + " " + tag3 + " " + tag4);
      var rfidString = String(RTag1) + " " + String(RTag2) + " " + String(RTag3) + " " + String(RTag4);
      console.log(addToCart(rfidString));
    }
  }

  function addToCart(tag) {
    for (let i = 0; i < items.length; i++) {
      if (tag == items[i].uid) {
        console.log("Adding " + items[i].name);
        setUserTotal(Number(userTotal) + Number(items[i].price));
        setItemCount(itemCount + 1);
        setUserCart(userCart => [...userCart, items[i]])
        return items[i].name;
      }
    }
    return console.log("Item not found");
  }

  function clearCart() {
    setUserCart([]);
    setUserTotal(0);
    setItemCount(0);
    alert("Cart Cleared");
  }

  const cardClick = async (item) => {
    setItemDetails(!itemDetails);
  }

  // Check for disconnection
  const onDisconnected = (event) => {
    alert(`The device ${event.target} is disconnected`);
    setIsDisconnected(true);
  }

  // Update characterisitc values
  const handleCharacteristicValueChanged1 = (event) => {
    setRFIDTagID1(event.target.value.getUint8(0));
    RTag1 = event.target.value.getUint8(0);
    tag1 = true;
  }
  const handleCharacteristicValueChanged2 = (event) => {
    setRFIDTagID2(event.target.value.getUint8(0));
    RTag2 = event.target.value.getUint8(0);
    tag2 = true;
  }
  const handleCharacteristicValueChanged3 = (event) => {
    setRFIDTagID3(event.target.value.getUint8(0));
    RTag3 = event.target.value.getUint8(0);
    tag3 = true;
  }
  const handleCharacteristicValueChanged4 = (event) => {
    setRFIDTagID4(event.target.value.getUint8(0));
    RTag4 = event.target.value.getUint8(0);
    tag4 = true;
    checkCartUpdate();
  }

  /**
   * Attempts to connect to a Bluetooth device and subscribe to
   * RFID ID readings using the custom service
   */
  const connectToDeviceAndSubscribeToUpdates = async () => {
    try {
      // Search for Bluetooth devices that advertise the RFID service
      device = (await navigator.bluetooth
        .requestDevice({
          filters: [{ services: ['bf6ae613-d58c-4a19-9a6e-803c926a1c90'] }]
        }));

      setIsDisconnected(false);

      // Add an event listener to detect when a device disconnects
      device.addEventListener('gattserverdisconnected', onDisconnected);

      // Try to connect to the remote GATT Server running on the Bluetooth device
      const server = await device.gatt.connect();
      // alert(JSON.parse(device));

      // Get the RFID service from the Bluetooth device
      const service = await server.getPrimaryService('bf6ae613-d58c-4a19-9a6e-803c926a1c90');

      // Get the RFID level characteristics from the Bluetooth device
      const characteristic1 = await service.getCharacteristic('bf6ae613-d58c-4a19-9a6e-803c926a1c91');
      const characteristic2 = await service.getCharacteristic('bf6ae613-d58c-4a19-9a6e-803c926a1c92');
      const characteristic3 = await service.getCharacteristic('bf6ae613-d58c-4a19-9a6e-803c926a1c93');
      const characteristic4 = await service.getCharacteristic('bf6ae613-d58c-4a19-9a6e-803c926a1c94');
      // const characteristicArr = await service.getCharacteristics();
      // console.log(characteristicArr);
      // const stringCharacteristic = await service.getCharacteristic('bf6ae613-d58c-4a19-9a6e-803c926a1c95');

      // Subscribe to RFID level notifications
      characteristic1.startNotifications();
      characteristic2.startNotifications();
      characteristic3.startNotifications();
      characteristic4.startNotifications();
      // characteristicArr.startNotifications();
      // stringCharacteristic.startNotifications();

      // When the RFID level changes, call a function
      characteristic1.addEventListener('characteristicvaluechanged', handleCharacteristicValueChanged1);
      characteristic2.addEventListener('characteristicvaluechanged', handleCharacteristicValueChanged2);
      characteristic3.addEventListener('characteristicvaluechanged', handleCharacteristicValueChanged3);
      characteristic4.addEventListener('characteristicvaluechanged', handleCharacteristicValueChanged4);
      // characteristicArr.addEventListener()
      // stringCharacteristic.addEventListener('characteristicvaluechanged', handleStringCharacteristicValueChanged);

      // Read the RFID level value
      const reading1 = await characteristic1.readValue();
      const reading2 = await characteristic2.readValue();
      const reading3 = await characteristic3.readValue();
      const reading4 = await characteristic4.readValue();
      // const stringReading = await stringCharacteristic.readValue();

      // Show the initial reading on the web page
      // setRFIDTagID1(reading1.getUint8(0), 1);
      // setRFIDTagID2(reading2.getUint8(0), 2);
      // setRFIDTagID3(reading3.getUint8(0), 3);
      // setRFIDTagID4(reading4.getUint8(0), 4);
      // setRFIDTagIDString(stringReading.getUnit32(""), 5)
    } catch (error) {
      console.log(`There was an error with getting characteristics: ${error}`);
    }
  };

  const item_style = {
    backgroundColor: '#eee',
    padding: '10px',
    width: '80%',
    height: '130px',
    marginBottom: '10px',
    display: 'flex',
  }

  return (
    <div>
      {isDisconnected &&
        <div className="connection-main">
          <h1 style={{ color: "white" }}>Connect to Your Smart Basket Over Bluetooth</h1>
          <br></br>
          <br></br>
          <br></br>
          <img src='https://cdn-icons-png.flaticon.com/512/3721/3721818.png' alt='Smart Basket' className="home-image"></img>
          <br></br>

          {supportsBluetooth && isDisconnected &&
            <Button variant="outlined" onClick={connectToDeviceAndSubscribeToUpdates} style={{ color: "white" }}>Connect to your Smart Basket</Button>
          }
          {!supportsBluetooth &&
            <p>This browser doesn't support the Web Bluetooth API</p>
          }

        </div>

      }
      {supportsBluetooth && !isDisconnected &&
        // <div>
        //   <p>Connected to Peripheral</p>
        //   <br />
        //   {RFIDTagID1} {RFIDTagID2} {RFIDTagID3} {RFIDTagID4}
        //   <br></br>
        //   {RFIDTagIDString}
        // </div>
        // <Navigate to="/basket" replace={true}></Navigate>
        <div className='cartview-main'>
          <Navbar />
          <h1 className='cart-title'>Shopping Cart</h1>
          
          {itemCount > 0 &&
            <div className='cart-item-list'>
              <h2>Total: ${userTotal}</h2>
              {userCart.map((item) => (
                <Button variant="none" onClick={() => cardClick(item)} style={{ width: "100%",  textDecoration: "none", textTransform: "none", padding: "0px" }}>
                <Card variant='outlined' sx={item_style} className='list-item-style'>
                  {/* <CardActionArea > */}
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
                            {/* Quantity: {item.stock} */}
                          </Typography>
                          <Typography variant="subtitle2" color="text" component="div">
                            ${item.price}
                          </Typography>
                        </Box>
                      </CardContent>
                    </Box>
                  {/* </CardActionArea> */}
                </Card>
                </Button>
              ))}
              <br></br>
              {/* <hr style={{ height: "2px", width:'100vw'}}></hr> */}
              <Button variant="outlined" onClick={clearCart}>Checkout</Button>
              <br></br>
            </div>}
            {itemCount <= 0 &&
            <div>
              <h2>Add some items</h2>
            </div>
          }
        </div>
      }
    </div>
  );
}

export default Connect;