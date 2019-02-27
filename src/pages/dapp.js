import React, { Component } from 'react';

import { Router } from '@reach/router';

import DappCreate from '../view/dapp/create';

import MyDappList from '../view/dapp/MyDappList';
import Dapplist from '../components/Dapplist'

import DappManage from '../view/dapp/manage';

import MaLayout from '../components/MaLayout'

const ArticlePage = class DappPage extends Component {
    render() { 
        return ( 
            <div>
                <MaLayout>
                    <div
                        style={{
                            margin: '0 auto',
                            // maxWidth: 60,
                            padding: '0px 1.0875rem 1.45rem',
                            paddingTop: 0,
                        }}
                    >
                        <Router>
                            <DappCreate path="/dapp/create/:name/" />
                            <Dapplist  path="/dapp/index"/>  
                            <DappManage path="/dapp/manage/:contractName/:contractAddress/" />
                      
                            <MyDappList path="/dapp/:address/" />
                        </Router>
                    </div>
                </MaLayout>   
            </div>  
        ) 
    }
};

export default ArticlePage