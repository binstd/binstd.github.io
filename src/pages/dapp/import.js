import React, { Component } from 'react';

import 'font-awesome/css/font-awesome.min.css';
import Header from '../../components/Header';
import Foot from '../../components/Foot';

import user_model from '../../model/user_model';

const rpc_url = 'https://mainnet.infura.io/v3/0045c2ce288a4e649a8f39f3d19446b4';
import { observer } from 'mobx-react';
import { server_url } from '../../lib/config';
// import queryString  from 'query-string';
import {navigateTo}  from "gatsby-link";

const ImportPage = observer(class ImportPage extends Component {

    constructor() {
        super();
        this.state = {
            showtoast: false,
            abi:'',
            dappName:'',
            contactAddress:''
        };
    }

    componentDidMount() {
    }

    //token name 设置   
    dappNameSet = ({ target: { value } }) => {
        this.setState({ dappName: value });
    };

    //token 小数点位数 设置
    contactAddressSet = ({ target: { value } }) => {
        this.setState({ contactAddress: value });
        console.log(this.state.contactAddress);
    };

    importDapp() {
        // console.log(user_model.address);
        let auth = "";
        let postData = {
            dappName:this.state.dappName,
            contactAddress:this.state.contactAddress,
            publicAddress:user_model.address,
        }

        if (localStorage.getItem("userinfo")) {
            let userinfo = JSON.parse(localStorage.getItem("userinfo"));
            auth = userinfo.auth.accessToken;
        }

        console.log('user_model.auth:\n',auth);
        console.log(postData);
        fetch(`${server_url}/api/dapp`, {
            body: JSON.stringify(postData),
            headers: {
                Authorization: `Bearer ${auth}`,
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(response => response.json()).then(data => {
            if(data.id){
                navigateTo('/dapp/')
            }
        })
      
    }

    render() {
        const { showtoast } = this.state;
        let toast;
        if (showtoast) {
            toast = (
                <Toast
                    status='warning'

                    onClose={() => this.setState({ showtoast: false })}>
                    <Box direction='row' justify='between' alignSelf='center' >
                        <span>DAPP即将上线, 请耐心等待！</span>
                    </Box>
                </Toast>
            );
        }

        return ( 
            <div>
                <Header />
                <div className="container">
                <div className="columns  box">
                    <div className="column is-one-quarter">
                        <a 
                            className="button  is-white is-rounded"
                            href="/dapp/" 
                        >
                            <span className="icon">
                                <i className="fa fa-arrow-left"></i>
                            </span>
                            <span>返回</span>
                        </a>
                    </div>
                </div>
                <div className="columns is-centered box">
                    <div className="column is-4">

                        <div className="field">
                            <label className="label">Dapp名称:</label>
                            <div className="control has-icons-left has-icons-right">
                                <input 
                                    className="input is-info" type="text" placeholder="Dapp名称"  
                                    onChange={this.dappNameSet}
                                />
                               
                            </div>
                            {/* <p className="help is-danger">token缩写, 而非全称</p> */}
                        </div>


                        <div className="field">
                            <label className="label">合约地址:</label>
                            <div className="control has-icons-left has-icons-right">
                                <input 
                                    className="input is-info" type="text" placeholder="合约地址"  
                                    onChange={this.contactAddressSet}
                                />
                               
                            </div>
                            {/* <p className="help is-danger">token名称得是英文</p> */}
                        </div>

                        

                        <div className="field has-text-centered">
                         <a 
                            className=" button is-info is-rounded is-fullwidth"
                            onClick={() => this.importDapp()}
                        >导入</a>
                        </div> 
                    </div>
                    
                </div>
                       
                {toast}
            </div>

                <Foot style="" />
            </div>
        ) 
    }
});

export default ImportPage
