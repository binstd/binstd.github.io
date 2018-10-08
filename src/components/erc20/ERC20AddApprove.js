
import React, { Component } from 'react';
import user_model from '../../model/user_model';
import { observer } from 'mobx-react';
import { server_url } from '../../lib/config';

const tokenjson = require('../../lib/sol/ERC20Token.json');

import { getMetamaskStatus, web3 } from '../../lib/eth';
// const contactlist = [
//     {
//         contactName:'luz',
//         contactAddress:'0x81d723361d4f3e648f2c9c479d88dc6debf4fa5f',
//     },
//     {
//         contactName:'赵佳佳',
//         contactAddress:'0x81d723361d4f3e648f2c9c479d88dc6debf4fa5f',
//     },
//     {
//         contactName:'孙方',
//         contactAddress:'0x81d723361d4f3e648f2c9c479d88dc6debf4fa5f',
//     }
// ];
const ERC20AddApprove = observer(  class ERC20AddApprove extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            contactName:'孙方',
            contactAddress:'',
            contactlist:[],
            searcthedContactList:[],
            isSearch:false,
            contractAddress:'',
            amount:'',
        };
    }

    componentWillMount(){

       console.log(this.props.dappid);
       let auth, userdapp = ''; 
       if (localStorage.getItem("userinfo")&&localStorage.getItem("userdapp")) {
            let userinfo = JSON.parse(localStorage.getItem("userinfo"));
            userdapp =  JSON.parse(localStorage.getItem("userdapp"));
            auth = userinfo.auth.accessToken;
        }
        console.log('userdapp:',userdapp);
        userdapp.map((item, index) => {
            console.log(item.id);
            if(item.id == this.props.dappid) {
                console.log('\n item.contractAddress: \n ',item.contractAddress)  
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
        console.log(value);
        let {contactlist} = this.state;
        let searcthedContactList = [];
        this.setState({ 
            contactAddress: value,
            isSearch:false
        });
        console.log('\n searcthedContactList.length=1>', searcthedContactList.length);
        contactlist.map((contact, index) => {
            console.log(contact.contactName.includes(value));
            if(contact.contactName.includes(value)||contact.contactAddress.includes(value)) {
                searcthedContactList.push(contact);  
            }       
        });
        console.log('\n searcthedContactList.length=2>', searcthedContactList.length);
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

    Approve(){
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
                let myContractInstance = MyContract.at(this.state.contractAddress);
                myContractInstance.approve(
                    this.state.contactAddress, 
                    this.state.amount,
                    function (err, myContract) {
                        if (!err) {
                            console.log('get!!!');    
                        }
                    }
                ); 
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
                    <label className="label">托管账户:</label>
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
                    <label className="label">托管金额:</label>
                    <div className="control has-icons-left has-icons-right">
                        <input
                            className="input is-info" type="text" placeholder="账户地址"
                            onChange={this.amountSet}
                        />
                    </div>
                </div>
                <div className="field has-text-centered">
                    <a
                        className="button is-info is-rounded "
                        onClick={() => this.Approve()}
                    >确定托管</a>
                </div> 
            </div>
        );
    }
});

export default ERC20AddApprove;