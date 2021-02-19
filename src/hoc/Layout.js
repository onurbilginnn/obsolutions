import React from 'react';
import {useSelector} from 'react-redux';

import Toolbar from '../components/Navigation/Toolbar/Toolbar';
import MainContent from '../components/MainContent/MainContent';
import MainContentMobile from '../components/MainContent/MainContentMobile/MainContentMobile';
import Footer from '../components/Footer/Footer';

const Layout = () => {
    const screenWidth = useSelector(state => state.screen.screenWidth);

    let mainContent = <MainContent />;

    if(screenWidth < 600) {
        mainContent = <MainContentMobile />;
    }

    return (<div id='all-content'  >
         <Toolbar />
         {mainContent}
         <Footer />
    </div>         
        )

    
}

export default Layout;