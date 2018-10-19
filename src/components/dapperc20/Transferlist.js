
import React, { Component } from 'react';
import user_model from '../../model/user_model';
import { observer } from 'mobx-react';

import { server_url } from '../../lib/config';
const TOKENTXLIST_API_URL = 'https://api-ropsten.etherscan.io/api?module=account&action=tokentx';
const API_KEY = '7Y1ATI2EXF81K6QMR3ASNNJMKPJGT2QB24';
const ContactList = observer( class ContactList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            contactName:'',
            contactAddress:'',
            tableData:[],
            txdata:[],
            address:''
        };
    }

    componentWillMount() {
       console.log(user_model.address) 
       let userdapp,userinfo = ''; 
       if (localStorage.getItem("userinfo")) {
           userinfo = JSON.parse(localStorage.getItem("userinfo"));
           this.setState({
                address:userinfo.address
           });
       }
       
       if (localStorage.getItem("userdapp")) {
            userdapp = JSON.parse(localStorage.getItem("userdapp"));
        // contractAddress = userdapp.contractAddress;
            console.log(userdapp[0].contractAddress);
        }

        var txdata = [];
        let param = {
            contractaddress:userdapp[0].contractAddress,
            address: userinfo.address,
            page: 1,
            offset: 6,
            sort: 'desc',
            apikey: API_KEY
        };
        let paramUrl = '';
        if (param) {
            let paramsArray = [];
            //拼接参数
            Object.keys(param).forEach(key => paramsArray.push(key + '=' + param[key]))
            paramUrl += '&' + paramsArray.join('&')
        }   
        
        fetch(`${TOKENTXLIST_API_URL}${paramUrl}`).then(res => res.json()).then(data => {
            
            txdata = data['result'];
            console.log('tokendate:', txdata);
            this.setState({
                // address: address,
                txdata: txdata,
                // loading:false
            });
        }).catch(function (e) {
            console.log("失败");
        });

    }
    
    //token name 设置   
    contactNameSet = ({ target: { value } }) => {
        this.setState({ contactName: value });
        console.log(value);
    };

    contactAddressSet = ({ target: { value } }) => {
        this.setState({ contactAddress: value });
        console.log(value);
    };

    importDapp() {
        // console.log(user_model.address);
    }

    render() {
        let { txdata} = this.state;
        const tableview = txdata.map((data, index) => {
            const { from, to, value } = data;
            
            let amount = value/Math.pow(10,18);
            console.log('data:',data);
            if (from == this.state.address) {
                return (
                    <tr  key={index} >
                        <td>
                            {data.to}
                        </td>

                        <td>
                            {amount}
                        </td> 
                        {/* <td>
                            
                        </td>      */}
                    </tr>   
                );
            }
        });
        return (
            <div>
                <table className="table is-hoverable is-narrow is-fullwidth">
                <thead>
                    <tr>
                    <th> 目标地址 </th>
                    <th> token数量 </th>
                    {/* <th> 转账状态 </th> */}
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

export default ContactList

