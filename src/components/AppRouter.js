import React from 'react';
import  {Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contacts from './pages/Contacts';


const AppRouter = (props) => {
    return (
        <Switch>

        <Route exact path='/' component={Home} />
        <Route exact path='/catalog' render={ ()=> 
            < Catalog 
                addProduct= {props .addProduct} 
                /> 
            } 
                
         />
        <Route exact path='/gallery' component={Gallery} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contacts' component={Contacts} />


        </Switch>
    )
}


export default AppRouter;