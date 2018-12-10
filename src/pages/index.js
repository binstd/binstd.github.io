import React from 'react'
import { Link } from 'gatsby'

import MaLayout from '../components/MaLayout'
// import SvgList from '../components/svglist'
import Dapplist from '../components/Dapplist'

class IndexPage extends React.Component {
    render() {
        return(
            <MaLayout>
             
                    {/* <SvgList /> */}
                    <Dapplist />
                    {/* 111 */}
                
             </MaLayout>
        ); 
    }
}

export default IndexPage
