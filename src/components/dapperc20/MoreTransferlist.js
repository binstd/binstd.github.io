
import React, { Component } from 'react';
import user_model from '../../model/user_model';
import { observer } from 'mobx-react';

import { server_url } from '../../lib/config';
const TOKENTXLIST_API_URL = 'https://api-ropsten.etherscan.io/api?module=account&action=tokentx';
const API_KEY = '7Y1ATI2EXF81K6QMR3ASNNJMKPJGT2QB24';
const MoreTransferlist = observer( class MoreTransferlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moreTtransferData:[]
        };
    }

    componentWillMount() {
        let auth = "";
       
        if (localStorage.getItem("userinfo")) {
            let userinfo = JSON.parse(localStorage.getItem("userinfo"));
            auth = userinfo.auth.accessToken;
        }
        fetch(`${server_url}/api/chain/moretransfer?dappId=${this.props.dappid}&status=0`, {
            headers: {
                Authorization: `Bearer ${auth}`
            }
        }).then(response => response.json())
            .then(result => {
                if(result.code==0){
                    console.log(result);
                    this.setState({
                        moreTtransferData:result.data
                    });
                }
            }).catch(err => {
                console.log(err);
        }); 
    }
    

    importDapp() {
        // console.log(user_model.address);
    }

    render() {
        let { moreTtransferData } = this.state;
        let tableview = moreTtransferData.map((data, index) => {
            return (
                <tr key={index} >
                  <td>
                        {data.toAddress}
                    </td> 
                    <td>
                        {data.contactName}
                    </td>
                   
                    <td>
                          {data.amount}
                    </td> 
                </tr>  
            );
        });
        return (
            <div>
                <table className="table is-hoverable is-narrow is-fullwidth">
                <thead>
                    <tr>
                    <th>目标地址</th>
                    <th> 目标名称 </th>
                    
                    <th>金额</th>
                    </tr>
                </thead>
                <tbody>    
                    {tableview}
                </tbody>
                </table>
            </div>
        );
    }
});

export default MoreTransferlist

