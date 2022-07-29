import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootswatch/dist/litera/bootstrap.min.css';

import './app.css';
import ShopHeader from '../shop-header/shop-header';
import HomePage from "../pages/home-page";
import CartPage from "../pages/cart-page";

const App = () => {
    return (
        <main role='main' className='container'>
            <ShopHeader/>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/cart' element={<CartPage />} />
            </Routes>
        </main>
)
};

export default App;
