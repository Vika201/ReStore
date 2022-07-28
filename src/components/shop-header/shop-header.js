import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import cart from '../../icons/cart.png';

import './shop-header.css';

const ShopHeader = ({ numItems, total }) => {
    return (
        <header className='shop-header'>
            <Link className='logo text-dark' to='/'>ReStore</Link>
            <div className='shopping-cart' />
                <Link to='/cart' className='cart'>
                    <img src={cart} alt=''  />
                    {numItems} items (${total})
                </Link>
        </header>
    )
};

const mapStateToProps = ({shoppingCart: { cartItems }}) => {
    return {
        numItems: cartItems.reduce((total, item) => total + item.count, 0),
        total: cartItems.reduce((total, item) => total + item.total, 0)
    }
};


export default connect(mapStateToProps)(ShopHeader);