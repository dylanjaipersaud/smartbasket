
import Connect from './Connect.js'
import CartView from './CartView';
import ItemView from './ItemView';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ConnectionView from './ConnectionView';

function App() {
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

        </div>
      </div>
    </Router>
  );
}

export default App;
