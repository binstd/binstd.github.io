import React, { Component } from 'react';

import '../lib/mybulma.sass'
// import jwtDecode from 'jwt-decode';

import Box from 'grommet/components/Box';

import Header from '../components/Header';
import Foot from '../components/Foot';
import { observer } from 'mobx-react';

import DappList from '../components/dapp/DappList';
import ERC20Manage from '../components/dapp/ERC20Manage';
import { server_url } from '../lib/config';

const DappPage = observer(  class DappPage extends Component {

    constructor() {
        super();
        this.state = {
            myDappCount:0
        }
    }
    
    componentDidMount() {
        let auth,address = "";
        if (localStorage.getItem("userinfo")) {
            let userinfo = JSON.parse(localStorage.getItem("userinfo"));
            auth = userinfo.auth.accessToken;
            address = userinfo.address;
        }

        fetch(`${server_url}/api/dapp/${address}`, {
            headers: {
              Authorization: `Bearer ${auth}`
            }
          })
          .then(response => response.json())
          .then(data => {
            console.log('myDappCount:', data.length);
             this.setState({ myDappCount: data.length });
              
        }).catch(console.log);
        // console.log(this.state.dapp);
    }

    render() { 
        let showContent = '';
        if(this.state.myDappCount == 0){
            showContent =  <DappList /> ;
        }else{
            showContent = <ERC20Manage />;
        }  
        // background
        return ( 
            <Box 
                
            >
                <Header />
                    {showContent}
                <Foot style="" />
            </Box>
           
        ) 
    }
});

export default DappPage
