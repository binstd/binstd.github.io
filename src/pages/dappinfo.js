import React, { Component } from 'react';
// import {Box} from 'grommet/index-commonjs'

import Header from '../components/Header';
import Foot from '../components/Foot';

import { observer } from 'mobx-react';

// import queryString  from 'query-string';

import DappErc20 from '../components/dapp/DappErc20';
import Importcontract from '../components/dapp/Importcontract';

const DappInfoPage = observer( class DappInfoPage extends Component {

    constructor() {
        super();
        this.state = {
            showtoast: false,
            dapp:'erc20'
        };
    }

    render() {
        const {dapp} = this.state;
        let showcontent =  '';
        
        switch (dapp) {
            case 'erc20':
                showcontent = <DappErc20 />;
                break;
            case 'import':
               
                showcontent = <Importcontract />;
                break;   
        }
        console.log(showcontent);
        return ( 
            <div >
                <Header />
                    {showcontent}
                <Foot style="" />
            </div>
        ) 
    }
});

export default DappInfoPage
