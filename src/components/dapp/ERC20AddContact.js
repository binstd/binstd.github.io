
import React, { Component } from 'react';
import user_model from '../../model/user_model';
import { observer } from 'mobx-react';

import { server_url } from '../../lib/config';
const ERC20AddContact = observer( class ERC20AddContact extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            contactName:'',
            contactAddress:''
        };
    }

    componentWillMount(){
       console.log(this.props.dappid) 
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

    addContact() {
        let auth = "";
        let postData = {
            contactName:this.state.contactName,
            contactAddress:this.state.contactAddress,
            address:user_model.address,
        }

        if (localStorage.getItem("userinfo")) {
            let userinfo = JSON.parse(localStorage.getItem("userinfo"));
            auth = userinfo.auth.accessToken;
        }

        console.log('user_model.auth:\n',auth);
        console.log(postData);
        fetch(`${server_url}/api/usercontact`, {
            body: JSON.stringify(postData),
            headers: {
                Authorization: `Bearer ${auth}`,
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then( response => response.json() ).then( data => {
            if(data.id){
                console.log(data.id);
                this.props.closeModel();
            }
        })
    }

    render() {
        return (
            <div>
                
                <div className="field">
                    <label className="label">备注:</label>
                    <div className="control has-icons-left has-icons-right">
                        <input
                            className="input is-info" type="text" placeholder="对钱包地址备注"
                            onChange={this.contactNameSet}
                        />
                    </div>
                    {/* <p className="help is-danger">token缩写, 而非全称</p> */}
                </div>

                <div className="field">
                    <label className="label">账户地址:</label>
                    <div className="control has-icons-left has-icons-right">
                        <input
                            className="input is-info" type="text" placeholder="合约地址"
                            onChange={this.contactAddressSet}
                        />
                    </div>
                </div>

                <div className="field has-text-centered">
                    <a
                        className=" button is-info is-rounded "
                        onClick={() => this.addContact()}
                    >
                        添加
                    </a>
                </div> 
            </div>
        );
    }
});

export default ERC20AddContact

