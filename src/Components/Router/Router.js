import React from 'react';
import {Routes, BrowserRouter, Route} from 'react-router-dom'

/* Componentes */
import Navbar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Producto from '../Producto/Producto';
import Index from '../../Pages/Index';

import './router.css';

function Router() {
    return (
        <>
            <BrowserRouter>
            <Navbar />
            <Routes>
        
            <Route path='/' element={<Index />} />
            <Route path='/producto' element={<Producto />} />
        
            </Routes>
            <Footer />
            </BrowserRouter>
        </>
    );
}

export default Router;