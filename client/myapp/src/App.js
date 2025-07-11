
import './App.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import Home from './innerpages/Home';
import Routing from './Routing';



function App() {
  return (
    <div>
      <Header />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
