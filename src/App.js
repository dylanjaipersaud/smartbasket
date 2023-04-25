
import Connect from './Connect.js'
import CartView from './CartView';
import ItemView from './ItemView';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ConnectionView from './ConnectionView';

function App() {
  // const isConnected = true;
  // function checkConnection(){
  //   if( isConnected ){
  //     return <CartView></CartView>
  //   }
  //   else{
  //     return <Connect></Connect>
  //   }
  // }
  return (
    <Router>
      <div className="App">
        
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Connect />} />
            <Route exact path="/basket" element={<CartView />} />
            <Route exact path="/ItemView/:item" element={<ItemView />} />
            <Route exact path="/ConnectionView" element={<ConnectionView />} />
          </Routes>
          {/* {isConnected &&
          <CartView></CartView>

          }
          {!isConnected &&
          <Connect></Connect>

          } */}
        </div>
      </div>
    </Router>
    // <div className="App">
    //   <Navbar />
    //   <div className="content">
    //     <CartView />
    //   </div>
    // </div>
  );
}

export default App;
