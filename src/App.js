import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Body from './Body';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      {/* <h1>mealsapp</h1> */}
      <Navbar></Navbar>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default App;
