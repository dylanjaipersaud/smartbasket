import Navbar from './Navbar';
import Connect from './Connect.js'
import CartView from './CartView';
import ItemView from './ItemView';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Connect />}/>
            <Route exact path="/basket" element={<CartView />}/>
            <Route exact path="/:item" element={<ItemView/>}/>
          </Routes>
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
