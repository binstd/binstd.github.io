
import React, { Component } from 'react';
import user_model from '../../model/user_model';
import { observer } from 'mobx-react';

import { server_url } from '../../lib/config';
const ContactList = observer( class ContactList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            contactName:'',
            contactAddress:'',
            tableData:[],
        };
    }

    componentWillMount() {
       console.log(user_model.address) 
       let auth = ''; 
       if (localStorage.getItem("userinfo")) {
            let userinfo = JSON.parse(localStorage.getItem("userinfo"));
            auth = userinfo.auth.accessToken;
        }
        fetch(`${server_url}/api/usercontact/${user_model.address}`, {
            headers: {
                Authorization: `Bearer ${auth}`
            }
        }).then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    tableData:data
                });
               
            }).catch(err => {
                this.setState({
                    Loading: true
            });
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
        let { tableData } = this.state;
        const tableview = tableData.map((data, index) => {
            return (
                <tr  key={index} >
                    <td>
                        {data.contactName}
                    </td>
                    <td>
                        {data.contactAddress}
                    </td>     
                </tr>
                  
            );
        });
       
        return (
            <div>
                <table className="table">
                <thead>
                    <tr>
                    <th> 备注 </th>
                    <th>账户地址</th>
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

