import {combineReducers} from 'redux';
import cart from './cart';
import catalog from './catalog';
import menu from './menu';

export default combineReducers({
    cart,
    catalog,
    menu,
})