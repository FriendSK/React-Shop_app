import React, { Component } from 'react';
import  {BrowserRouter} from 'react-router-dom';
import AppRouter from './AppRouter';
import Header from './main/Header';
import './App.scss';


class App extends Component {

  

  render() {
   
   
    return (

      <BrowserRouter>
      <div className="App">

      <Header />
      <AppRouter/>
      
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
