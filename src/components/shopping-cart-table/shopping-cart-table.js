import React from 'react';

import { connect } from 'react-redux';

import del from '../../icons/delete.png';
import minus from '../../icons/minus.png';
import plus from '../../icons/plus.png';

import {
    bookAddedToCart,
    bookRemovedFromCart,
    allBooksRemovedFromCart } from "../../actions/actions";

import './shopping-cart-table.css';


const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {
    const renderRow = (item, idx) => {
        const { id, title, count, total } = item;
        return (
        <tr key={id}>
            <td>{idx + 1}</td>
            <td>{title}</td>
            <td>{count}</td>
            <td>${total}</td>
            <td>
                <button className='btn'
                        onClick={() => onDecrease(id)}>
                    <img src={plus} alt=''/>
                </button>
                <button className='btn'
                        onClick={() => onIncrease(id)}>
                    <img src={minus} alt=''/>
                </button>
                <button className='btn'
                        onClick={() => onDelete(id)}>
                    <img src={del} alt=''/>
                </button>
            </td>
        </tr>
        );
    };

    return (
        <div className='shopping-cart-table'>
            <h2>Your Order</h2>
            <table className='table'>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th>Count</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                </thead>

                <tbody>
                    {items.map(renderRow)}
                </tbody>
            </table>

            <div className='total'>
                Total: ${total}
            </div>
        </div>
    )
};

const mapStateToProps = ({shoppingCart: { cartItems, orderTotal}}) => {
    return {
        items: cartItems,
        total: orderTotal
    }
};

const mapDispatchToProps = {
        onDecrease: bookAddedToCart,
        onIncrease: bookRemovedFromCart,
        onDelete: allBooksRemovedFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);