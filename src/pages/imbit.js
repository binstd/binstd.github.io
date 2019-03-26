import React, { Component } from 'react';

import DappCreate from '../view/dapp/create';

import MaLayout from '../components/MaLayout'

import ProductSmokingHero from '../components/imbit/ProductSmokingHero';

import ProductHero from '../components/imbit/ProductHero';
import ProductValues from '../components/imbit/ProductValues';
// import ProductHowItWorks from '../components/imbit/ProductHowItWorks';

import Footer from '../components/Footer';
import Helmet from 'react-helmet';
const ImbitPage = class ImbitPage extends Component {
    render() { 
        return ( 
            <MaLayout>
                     <Helmet>
                        <title>IMbit-Web3.0时代数字身份系统,自主控制授权你的身份数据 </title>
                     </Helmet>
                        {/* <AppAppBar /> */}
                        <div style={{marginTop: '50px'}}>
                            <ProductHero  />
                            <ProductValues />
                            {/* <ProductCategories /> */}
                            
                            {/* <ProductHowItWorks /> */}
                            {/* <ProductCTA /> */}
                            <ProductSmokingHero />
                            <Footer /> 
                        </div>
                    {/* <AppFooter /> */}
       
            </MaLayout>   
        ) 
    }
};

export default ImbitPage




