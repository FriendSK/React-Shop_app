import React from 'react';
import  {Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Gallery from './pages/Gallery';


const AppRouter = () => {
    return (
        <Switch>

        <Route exact path='/' component={Home} />
        <Route exact path='/catalog' component={Catalog} />
        <Route exact path='/gallery' component={Gallery} />

        </Switch>
    )
}


export default AppRouter;