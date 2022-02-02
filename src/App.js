import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from './Pages/Home'
import About from './Pages/About';
import Cart from './Pages/Cart';
import Products from './components/Products'
import Contact from './Pages/Contact';
import SingleProduct from './Pages/SingleProduct';
import {connect} from 'react-redux'
import Footer from './components/Footer';

function App({ current }) {
  return (
    <Router>      
      <Navbar/>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/cart'>
          <Cart/>
        </Route>
        <Route path='/products'>
          <Products />          
        </Route>
        <Route path='/contact'>
          <Contact/>      
        </Route>
        {!current ? (
            <Redirect to="/" />
          ) : (
            <Route exact path="/product/:id" component={SingleProduct} />
          )}    
      </Switch>
      <Footer/>
    </Router>
  );
}
const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);