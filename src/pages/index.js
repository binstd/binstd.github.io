import React from 'react'
// import { Link } from 'gatsby'

import MaLayout from '../components/MaLayout'
// import Dapplist from '../components/Dapplist'
import ProductSmokingHero from '../components/imbit/ProductSmokingHero';

import ProductHero from '../components/home/ProductHero';
// import ProductValues from '../components/home/ProductValues';
import ProductHowItWorks from '../components/home/ProductHowItWorks';
import Footer from '../components/Footer';
class IndexPage extends React.Component {
    render() {
        return(
            <MaLayout>     
                <div style={{marginTop: '50px'}}>
                    <ProductHero  />
                    <ProductHowItWorks />
                    <Footer /> 
                </div>
                {/* <Dapplist />   */}
             </MaLayout>
        ); 
    }
}

export default IndexPage
