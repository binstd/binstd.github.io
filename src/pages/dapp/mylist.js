import React, { Component } from 'react';
import Header from '../../components/Header';
import Foot from '../../components/Foot';
import { observer } from 'mobx-react';

import 'font-awesome/css/font-awesome.min.css';
import UserDapp from '../../components/dapp/UserDapp';

const MylistPage = observer(class CreatePage extends Component {

    constructor() {
        super();
    }

    render() {
        return ( 
            <div >
                <Header />       
                <UserDapp />
                <Foot style="" />
            </div>
        ) 
    }
});

export default MylistPage
