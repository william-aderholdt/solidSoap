import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';


class Products extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid" id="products">
          <Navigation />
          <Main />
        </div>
      </Router>
    );
  }
}


export default Products;

const Navigation = () => (
  <nav>
    <ul>
      <li><NavLink id='navlink' exact to='/'>B.Cream</NavLink></li>
      <li><NavLink id='navlink' to='/zestyorange'>Z.Orange</NavLink></li>
      <li><NavLink id='navlink' to='/tobaccocask'>T.Cask</NavLink></li>
    </ul>
  </nav>
);

const Main = () => (
  <div>
    <Route exact path='/' component={BerryCream} />
    <Route exact path='/zestyorange' component={ZestyOrange} />
    <Route exact path='/tobaccocask' component={TobaccoCask} />
  </div>
);

const BerryCream = () => (
  <div id="productBox">
    <h1>Berry Cream</h1>
    <img src={ require('./berryCream.jpg') } alt='' />
    <p>Made with fresh berries, essential oils, and natural extracts. The Berry Cream conditioner is our favorite product. </p>
    <a href="#"><h2>Order Now</h2></a>
  </div>
);

const ZestyOrange = () => (
  <div id="productBox">
    <h1>Zesty Orange</h1>
    <img src={ require('./zestyOrange.jpg') } alt='' />
    <p>Made with with real orange zest, essential oils, and natural extracts. The Zest Orange shampoo will wake you right up! </p>
    <a href="#"><h2>Order Now</h2></a>
  </div>
);

const TobaccoCask = () => (
  <div id="productBox">
    <h1>Tobacco Cask</h1>
    <img src={ require('./tobaccoCask.jpg') } alt='' />
    <p>Made with a more masculine scent in mind. Tobacco Cask shampoo uses fresh tobacco wood to hold its scent.</p>
    <a href="#"><h2>Order Now</h2></a>
  </div>
);