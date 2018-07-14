import React, { Component } from 'react';
import './Assets/css/default.min.css';

//components
import Footer from './components/footerComponent/footer';
import Header from './components/headerComponent/header';
import Homepage from './components/pages/homePage';
import Philosophy from './components/pages/philosophy';
import Products from './components/pages/products';
import Contact from './components/pages/contact';

class App extends Component {
  render() {
    return (
      <div className="App">

        <main>
          <Homepage />
          <Header />
          <Philosophy />
          <div className='transparent'><div id='darken'></div></div>
          <Products />
          <div className='transparent'><div id='darken'></div></div>
          <Contact />
          <Footer />
        </main>

      </div>
    );
  }
}

export default App;
