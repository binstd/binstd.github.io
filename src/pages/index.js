import React from 'react'

import MaLayout from '../components/MaLayout'

import ProductSmokingHero from '../components/imbit/ProductSmokingHero';
import Helmet from 'react-helmet';

import ProductHero from '../components/home/ProductHero';

import ProductHowItWorks from '../components/home/ProductHowItWorks';
import Footer from '../components/Footer';
class IndexPage extends React.Component {
    render() {
        return(
            <MaLayout>     
                 <Helmet>
                    <title>BinStd- 进制数据，API数据云服务平台 </title>
                </Helmet>
                <div style={{marginTop: '50px'}}>
                    <ProductHero  />
                    <ProductHowItWorks />
                    <Footer /> 
                </div>
             </MaLayout>
        ); 
    }
}

export default IndexPage
