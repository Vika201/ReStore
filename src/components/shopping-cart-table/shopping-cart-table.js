import React from 'react';

import del from '../../icons/delete.png';
import minus from '../../icons/minus.png';
import plus from '../../icons/plus.png';

import './shopping-cart-table.css';


const ShoppingCartTable = () => {
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
                    <tr>
                        <td>1</td>
                        <td>Site Reliability Engineering</td>
                        <td>2</td>
                        <td>$40</td>
                        <td>
                            <button className='btn'>
                                <img src={plus} alt=''/>
                            </button>
                            <button className='btn'>
                                <img src={minus} alt=''/>
                            </button>
                            <button className='btn'>
                                <img src={del} alt=''/>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className='total'>
                Total: $201
            </div>
        </div>
    )
};

export default ShoppingCartTable;