import React, { Component } from 'react';
import  {BrowserRouter} from 'react-router-dom';
import AppRouter from './AppRouter';
import Header from './main/Header';
import './App.scss';


class App extends Component {


constructor (props) {
  super (props);
  this.state = {
    cartProducts: []
  }
}
  
addProduct = (product) => {
  let cartProducts = [...this.state.cartProducts, {...product}]

  this.setState ({cartProducts})
}



  render() {
   
   
    return (

      <BrowserRouter>
      <div className="App">

      <Header   cartProducts={this.state.cartProducts} />
      <AppRouter addProduct= {this.addProduct} />
      
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
