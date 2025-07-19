
import './App.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import Home from './innerpages/Home';
import Routing from './Routing';
import Test_Header from './header/Test_Header';
import AmazonSelfShipList from './innerpages/AmazonSelfShipList';




function App() {
  return (
    <div>

      <Test_Header/>
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
