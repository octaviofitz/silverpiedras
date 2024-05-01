import React from 'react';

/* Componentes */
import Navbar from '../NavBar/NavBar';
import Banner from '../Banner/Banner';
import Cards from '../Cards/Cards';
import Footer from '../Footer/Footer';
import Producido from '../Producido/Producido';

import './router.css';

function Router() {
    return (
        <div>
            <Navbar />
            <main>
            <Banner />
            <Cards />
            <Producido />
            </main>
            <Footer />
        </div>
    );
}

export default Router;