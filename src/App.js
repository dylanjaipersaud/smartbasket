import Navbar from './Navbar';
import CartView from './CartView';


function App() {
  return (
    
    <div className="App">
      <Navbar/>
      <div className="content">
        <CartView/>
      </div>
    </div>
  );
}

export default App;
