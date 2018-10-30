import React, { Component } from 'react';
import '../mybulma.sass'

// import jwtDecode from 'jwt-decode';

import Box from 'grommet/components/Box';
import Header from '../components/Header';
import Foot from '../components/Foot';
// import { observer } from 'mobx-react';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import DappList from '../components/dapp/DappList';
import UserDapp from '../components/dapp/UserDapp';
import ERC20Manage from '../components/dapperc20/ERC20Manage';
import Import from '../components/dapp/Import';
import Create from '../components/dapp/Create';

const DappPage = class DappPage extends Component {
    render() { 
        return ( 
            <Box>
                <Header />
                    <Route path="/dapp/index" component={DappList} />
                    {/* <Route path="/dapp/" component={DappList} /> */}
                    <Route path="/dapp/manage/:id" component={ERC20Manage} />   
                    <Route path="/dapp/mylist" component={UserDapp} />   
                    <Route path="/dapp/import" component={Import} />   
                    <Route path="/dapp/create" component={Create} />  
                    <Foot style="" />
            </Box>     
        ) 
    }
};

export default DappPage
