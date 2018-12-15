import React, { Component } from 'react';

import { Router, navigate } from '@reach/router';

import DappCreate from '../view/dapp/create';
import DappDeployed from '../view/dapp/deployed';
import MyDappList from '../view/dapp/MyDappList';
import DappManage from '../view/dapp/manage';

import MaLayout from '../components/MaLayout'
// import Dashboard from '../components/dashboard/Dashboard'

const ArticlePage = class DappPage extends Component {
    render() { 
        return ( 
            <div>
                <MaLayout>
                    <div
                        style={{
                            margin: '0 auto',
                            maxWidth: 960,
                            padding: '0px 1.0875rem 1.45rem',
                            paddingTop: 0,
                        }}
                    >
                        <Router>
                            <DappCreate path="/dapp/create/:name/" />
                            {/* <Dashboard path="/dapp/mana/:contractAddress/" /> */}
                                <DappManage path="/dapp/manage/:contractName/:contractAddress/" />
                            
                            {/* <DappDeployed path="/dapp/deployed/:txhash/" /> */}
                            <MyDappList path="/dapp/:address/" />
                        </Router>
                    </div>
                </MaLayout>   
            </div>  
        ) 
    }
};

export default ArticlePage