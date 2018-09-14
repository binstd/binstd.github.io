import React, { Component } from 'react';
import Header from '../../components/Header';
import Foot from '../../components/Foot';
import { observer } from 'mobx-react';

import 'font-awesome/css/font-awesome.min.css';
import DappErc20 from '../../components/dapp/DappErc20';

const CreatePage = observer(class CreatePage extends Component {

    constructor() {
        super();
    }

    render() {
        return ( 
            <div >
                <Header />       
                <DappErc20 />
                <Foot style="" />
            </div>
        ) 
    }
});

export default CreatePage
