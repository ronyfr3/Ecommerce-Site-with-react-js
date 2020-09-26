import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Header from './Header';
import Products from './Products';
import Payment from './Payment';
import Details from './Details';
import Cart from './Cart';
import {DataProvider} from './DataProvider';
import './App.css';

function App() {
  return (
    <DataProvider>
    <div className="App">
    <Router>
           <Header/>
        <Switch>
          <Route exact path="/products">
              <Products/>
          </Route>
          <Route exact path="/cart">
              <Cart/>
          </Route>
          <Route exact path="/payment">
              <Payment/>
          </Route>
          <Route exact path="/products/:id">
              <Details/>
          </Route>
        </Switch>
    </Router>
    </div>
  </DataProvider>
  )
}

export default App;