import React, { Component } from 'react';

import Header from './components/header';
import Layout from './components/layout';
import Dialog from './components/dialog';

import './main.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Layout />
        <Dialog />
      </div>
    );
  }
}

export default App;
