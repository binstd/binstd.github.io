
import React, { Component } from 'react';
import user_model from '../../model/user_model';
import { observer } from 'mobx-react';
import { server_url } from '../../lib/config';

const tokenjson = require('./sol/ERC20Token.json');

import { getMetamaskStatus, web3 } from '../../lib/eth';

const ERC20AddTransfer = observer(  class ERC20AddTransfer extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            contactAddress:'',
            contactlist:[],
            searcthedContactList:[],
            isSearch:false,
            contractAddress:'',
            amount:'',
        };
    }

    componentWillMount(){
       let auth, userdapp = ''; 
       if (localStorage.getItem("userinfo")&&localStorage.getItem("userdapp")) {
            let userinfo = JSON.parse(localStorage.getItem("userinfo"));
            userdapp =  JSON.parse(localStorage.getItem("userdapp"));
            auth = userinfo.auth.accessToken;
        }
        userdapp.map((item, index) => {
            if(item.id == this.props.dappid) {
                // console.log('\n item.contractAddress: \n ',item.contractAddress)  
                this.setState({
                    contractAddress:item.contractAddress
                });          
            }
        });
    
        fetch(`${server_url}/api/usercontact/${user_model.address}`, {
            headers: {
                Authorization: `Bearer ${auth}`
            }
        }).then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    contactlist:data
                });
               
            }).catch(err => {
                console.log(err);
        }); 
    }

    //token name 设置   
    // addressSet = (value) => {
    addressSet = ({ target: { value } }) => {
        let {contactlist} = this.state;
        let searcthedContactList = [];
        this.setState({ 
            contactAddress: value,
            isSearch:false
        });
       
        contactlist.map((contact, index) => {
            console.log(contact.contactName.includes(value));
            if(contact.contactName.includes(value)||contact.contactAddress.includes(value)) {
                searcthedContactList.push(contact);  
            }       
        });
      
        if ( searcthedContactList.length != 0 ) {
            this.setState({
                isSearch:true,
                searcthedContactList
            });
        }
    };



    amountSet = ({ target: { value } }) => {
        this.setState({
            amount:value
        });
        // this.props.closeModel();
    }

    getAddress() {
        let { searcthedContactList } = this.state;
        return searcthedContactList.map((contact, index) => {
            return <option key={index} value={contact.contactAddress}  onClick={() => this.chooseAddress(contact.contactAddress)}  > {contact.contactName}({contact.contactAddress})</option>;
        });

    }    
    // 设定选中
    chooseAddress(contactAddress) {
        this.setState({ contactAddress});
        console.log('contactAddress',contactAddress);
        this.setState({ 
            isSearch:false
        });
    }

    addTransfer(){
        console.log(this.state.contactAddress, this.state.amount);
        // console.log(httpweb3);
        switch (getMetamaskStatus()) {
            case 'unlockMetamask':
                alert('请先解锁metamask!');
                break;
            case 'noMetamask':
                alert('请在装有metamask的浏览器或trustwallet自带浏览器中打开!');
                break;
            case 'okMetamask':
                let MyContract = web3.eth.contract(tokenjson.abi);
                // initiate contract for an address
                console.log('\n this.state.contractAddress:',this.state.contractAddress);
                let myContractInstance = MyContract.at(this.state.contractAddress);
                myContractInstance.transfer(
                    this.state.contactAddress, 
                    this.state.amount,
                    function (err, transactionHash) {
                        if (!err) {
                            console.log('get!!!'); 
                            if(transactionHash){
                                this.props.closeModel();
                                console.log(transactionHash);
                            }   
                        }
                    }
                ); 
                // web3.eth.sendTransaction({from: web3.eth.accounts[0], to: to_address, value: web3.toWei(amount, "ether")},
                // function(err, transactionHash) {
                //     if (!err)
                //     //   console.log(transactionHash); 
                //     //   console.log(redirect_url);
                //       if(transactionHash){
                //         window.location.href = redirect_url;
                //       }
                     
                //   }    
                // )
            default:
                break;
        }
    }

    render() {
        let { contactAddress } = this.state; 
        let searchSelect = '';
        if(this.state.isSearch){
            searchSelect = <div className="select is-multiple is-info">
                                <select multiple size="5">
                                     {/* <option value="Argentina">Argentina</option> */}
                                     {this.getAddress()}
                                </select>
                            </div>;
        }
        
        return (
            <div>
                <div className="field">
                    <label className="label">转账账户:</label>
                    <div className="control has-icons-left has-icons-right">
                        <input
                            className="input is-info" type="text" placeholder="输入新地址或搜索账户备注列表"
                            // onChange={contactAddress => this.addressSet(contactAddress)}
                            value={contactAddress}   
                            onChange={this.addressSet}
                        />
                        {searchSelect}
                    </div>
                </div>
                <div className="field">
                    <label className="label">转账金额:</label>
                    <div className="control has-icons-left has-icons-right">
                        <input
                            className="input is-info" type="text" placeholder="账户金额"
                            onChange={this.amountSet}
                        />
                    </div>
                </div>
                <div className="field has-text-centered">
                    <a
                        className="button is-info is-rounded "
                        onClick={() => this.addTransfer()}
                    >确定转账</a>
                </div> 
            </div>
        );
    }
});

export default ERC20AddTransfer;