import React, { Component } from 'react';
import AppRouter from './AppRouter';
import Header from './main/Header';
import './App.scss';


class App extends Component {

  

  render() {
   
   
    return (
      <div className="App">

      <Header />
      <AppRouter/>
      
      </div>
    );
  }
}

export default App;
