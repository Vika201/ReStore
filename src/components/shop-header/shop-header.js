import React from 'react';

import './shop-header.css';

const ShopHeader = ({ numItems, total}) => {
    return (
        <header className='shop-header'>
            <a className='logo text-dark' href='#'>ReStore</a>
            <a className='shopping-cart' />
            <a>
                <i className='cart-icon fa fa-shopping-cart' />
                {numItems} items (${total})
            </a>
        </header>
    )
};

export default ShopHeader;