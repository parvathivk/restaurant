import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import RestaurantDetails from './RestaurantDetails';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {

  return (
    <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/details/:id" element={<RestaurantDetails/>}/>
    </Routes>
    <Footer/>
    </Router>
  );
}

export default App;
