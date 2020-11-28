import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductsState from './Global/ProductsState';
import Products from './components/Products';
import Cart from './components/Cart';

export default function App(){
return(
  <div className=''>
    <ProductsState>
    <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Products} />
      <Route path='/cart' component={Cart} />
      </Switch>
    </Router>
    </ProductsState>
  </div>
)
}



