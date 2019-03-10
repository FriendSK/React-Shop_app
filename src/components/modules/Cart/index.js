import React, { Component } from 'react';
import Head from './Head';
import Body from './Body';
import './style.scss';
import { connect } from 'react-redux';

import { removeProductAction, toggleShowCartAction, queryOrderAction,
setPhoneAction, } from '../../../actions/cart';


class Cart extends Component {

    componentDidMount() {
        const container = document.querySelector('body');
        container.onclick = (event) => {
            const isCart = !!event.path.find((el) => {
                if (el.id === 'cart' || el.className === 'btn-add-product') {
                    return true
                }
                return false;
            });
            if (!isCart) {

                this.props.toggle('hide');
            }
        }
    }

    componentDidUpdate() {
        const {
            quantity,
            isShow,
            toggle,
        } = this.props;

        if (!quantity && isShow) {
            toggle('hide')
        }
      this.queryOrderHandler = () => {
            this.props.queryOrder(this.props);
        }
    }
    render() {
        const {
            products,
            remove,
            sum,
            quantity,
            isShow,
            toggle,
            isErrorPhone,
            isSuccessOrder,
            setPhone,
        } = this.props;


        return (
            <div id='cart'>

                <Head
                    sum={sum}
                    quantity={quantity}
                    toggle={toggle}
                />
                {
                    isShow && quantity ?

                        <Body
                            isErrorPhone={isErrorPhone}
                            isSuccessOrder={isSuccessOrder}
                            products={products}
                            remove={remove}
                            setPhone={setPhone}
                            queryOrderHandler={this.queryOrderHandler}
                        />
                        : ''
                }
            </div>

        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        remove: product => removeProductAction(dispatch, product),
        toggle: value => toggleShowCartAction(dispatch, value),
        queryOrder: data =>  queryOrderAction(dispatch, data),
        setPhone: data =>  setPhoneAction(dispatch, data)

    }
}

const mapStateToProps = (state) => {
    return {
        products: state.cart.products,
        quantity: state.cart.quantity,
        sum: state.cart.sum,
        isShow: state.cart.isShow,
        isErrorPhone: state.cart.isErrorPhone,
        isSuccessOrder: state.cart.isSuccessOrder,
        phone: state.cart.phone,

    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Cart);