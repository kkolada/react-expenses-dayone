import React, { Component } from 'react';
import { Header } from './components/Navbar';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="app-root">
        <Header/>
        <Pricing/>
        <div className="container">
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
