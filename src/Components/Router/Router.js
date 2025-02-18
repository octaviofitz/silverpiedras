import React from 'react';
import {Routes, BrowserRouter, Route} from 'react-router-dom'

/* Componentes */
import Navbar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Bentonita from '../Productos/Bentonita/Bentonita';
import Diatomita from '../Productos/Diatomita/Diatomita';
import Recomendaciones from '../Recomendaciones/Recomendaciones';
import ScrollToTop from '../Utilidades/ScrollToTop';
import Index from '../../Pages/Index';

import './router.css';

function Router() {
    return (
        <>
            <BrowserRouter>
            <ScrollToTop />
            <Navbar />
            <Routes>
            
            <Route path='/' element={<Index />} />
            <Route path='/bentonita' element={<Bentonita />} />
            <Route path='/diatomita' element={<Diatomita />} />
            <Route path='/recomendaciones' element={<Recomendaciones />} />

                    
            </Routes>
            <Footer />
            </BrowserRouter>
        </>
    );
}

export default Router;