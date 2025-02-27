import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/* Componentes */
import Navbar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import ScrollToTop from '../Utilidades/ScrollToTop';

/* Páginas */
import Index from '../../Pages/Index';
import Bentonita from '../Productos/Bentonita/Bentonita';
import Diatomita from '../Productos/Diatomita/Diatomita';
import Recomendaciones from '../Recomendaciones/Recomendaciones';

import './router.css';

function Router() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Navbar />
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/bentonita" element={<Bentonita />} />
                <Route path="/diatomita" element={<Diatomita />} />
{/*                 <Route path="/recomendaciones" element={<Recomendaciones />} />
 */}            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default Router;
