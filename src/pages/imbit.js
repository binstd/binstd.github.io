import React, { Component } from 'react';

import { Router } from '@reach/router';

import DappCreate from '../view/dapp/create';

import MyDappList from '../view/dapp/MyDappList';
import DappManage from '../view/dapp/manage';

import MaLayout from '../components/MaLayout'
// import withRoot from './modules/withRoot';

// --- Post bootstrap -----
// import React from 'react';

// import ProductCategories from './components/imbit/ProductCategories';
import ProductSmokingHero from '../components/imbit/ProductSmokingHero';

import ProductHero from '../components/imbit/ProductHero';
import ProductValues from '../components/imbit/ProductValues';
import ProductHowItWorks from '../components/imbit/ProductHowItWorks';
// import ProductCTA from '../components/imbit/ProductCTA';
// import AppAppBar from './components/imbit/AppAppBar';
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






// function Index() {
//   return (
//     <React.Fragment>
//       <AppAppBar />
//       <ProductHero />
      
//       <ProductValues />
      
//       <ProductCategories />

//       <ProductHowItWorks />
//       <ProductCTA />
//       <ProductSmokingHero />
//       <AppFooter />
//     </React.Fragment>
//   );
// }

// export default withRoot(Index);
