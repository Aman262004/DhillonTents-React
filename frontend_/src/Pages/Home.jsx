import React from 'react';
import Main from '../Components/Main/Main';
import CardGrid from '../Components/Cards/Cards';
import OurServices from '../Components/OurServices/OurServices';
import Gallary from '../Components/Gallary/Gallary';

const Home = () => {
    return (
        <div>
            <Main />
            <OurServices />
            <CardGrid />
            <Gallary/>
        </div>
    );
}

export default Home;