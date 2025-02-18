import React from 'react';

import Banner from '../Components/Banner/Banner';
import Cards from '../Components/Cards/Cards';
import Tiendas from '../Components/Tiendas/Tiendas';
import Distribuidores from '../Components/Distribuidores/Distribuidores';

function Index() {
    return (
        <main>
            <Banner />
            <Cards />
            <Tiendas />
            <Distribuidores />
        </main>
    );
}

export default Index;