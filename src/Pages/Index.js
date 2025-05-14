import React from 'react';

import Banner from '../Components/Banner/Banner';
import Cards from '../Components/Cards/Cards';
import Tiendas from '../Components/Tiendas/Tiendas';
import Distribuidores from '../Components/Distribuidores/Distribuidores';
import CardsDesktop from '../Components/Cards/CardsDesktop/CardsDesktop';

function Index() {
    return (
        <main>
            <Banner />
            <Cards />
            <CardsDesktop /> 
            <Tiendas />
            <Distribuidores />
        </main>
    );
}

export default Index;