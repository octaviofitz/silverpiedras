import React from 'react';

/* Componentes */
import Navbar from '../NavBar/NavBar';
import Banner from '../Banner/Banner';
import Cards from '../Cards/Cards';
import Footer from '../Footer/Footer';
import Producido from '../Producido/Producido';

function Router() {
    return (
        <div>
            <Navbar />
            <Banner />
            <Cards />
            <Producido />
            <Footer />
        </div>
    );
}

export default Router;