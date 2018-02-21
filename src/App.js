import React, { Component } from 'react';
import { Header } from './components/Navbar';
import { Content } from './components/Content';
import { Pricing } from './components/Pricing';
import { Cards } from './components/Cards';
import { Footer } from './components/Footer';

class App extends Component {
  render() {
    return (
      [
        <Header/>,
        <Content>
          <Pricing/>
          <Cards/>
          <Footer/>
        </Content>
      ]
    );
  }
}

export default App;
