
import React, { Component } from 'react';
import user_model from '../../model/user_model';
import { observer } from 'mobx-react';
import { server_url } from '../../lib/config';

const tokenjson = require('../../lib/sol/ERC20Token.json');
import { getMetamaskStatus, web3 } from '../../lib/eth';

// let moreTransferList = [
//     {
//         toAddress:'34343mmm',
//         contactName:'luz',
//         amount:'4.434'
//     },
//     {

//         toAddress:'34343mmm',
//         contactName:'陆周',
//         amount:'4.434'
//     }
// ];
const ERC20AddMoreTransfer = observer( class ERC20AddMoreTransfer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moreTtransferData:[],  //转账账户列表
            contactAddress:'', //联系人地址
            contactName:'',//联系人备注
            contactlist:[], 
            searcthedContactList:[], //搜索到的
            isSearch:false,
            contractAddress:'', //合约地址
            amount:'',
            nextpage:false,
            fromAddress:'',
            dappChain:'',
        };
    }

    componentWillMount(){
       let auth, userdapp = ''; 
       if (localStorage.getItem("userinfo")&&localStorage.getItem("userdapp")) {
            let userinfo = JSON.parse(localStorage.getItem("userinfo"));
            userdapp =  JSON.parse(localStorage.getItem("userdapp"));
            auth = userinfo.auth.accessToken;
            this.setState({
                fromAddress:userinfo.address
            });
        }

        userdapp.map((item, index) => {
            if( item.id == this.props.dappid ) {
                this.setState({
                    contractAddress:item.contractAddress,
                    dappChain:item.dappChain
                });          
            }
        });

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
        
        fetch(`${server_url}/api/user/contact/${user_model.address}`, {
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

    amountSet = (index, event) => {
        let { moreTtransferData } = this.state;
        let oneTransfer = moreTtransferData[index];
        oneTransfer.amount = event.target.value;
        oneTransfer.fromAddress = this.state.fromAddress;
        oneTransfer.dappId = this.props.dappid;
        console.log(oneTransfer);
        moreTtransferData.splice(index, 1, oneTransfer);
        this.setState({
            moreTtransferData
        });
    }

    getAddress() {
        let { searcthedContactList } = this.state;
        return searcthedContactList.map((contact, index) => {
            return <option key={index} value={contact.contactAddress}  onClick={() => this.chooseAddress(contact.contactAddress,contact.contactName)}  > {contact.contactName}({contact.contactAddress})</option>;
        });

    }  
    // 设定选中
    chooseAddress(contactAddress, contactName) {
        this.setState({ contactAddress});
        console.log('contactAddress,contactName: \n',contactAddress,contactName);
        this.setState({ 
            contactAddress,
            contactName,
            isSearch:false
        });
    }

    //添加新转账对象
    addTransfer(){
        let {moreTtransferData} = this.state;
        moreTtransferData.push({toAddress:this.state.contactAddress,contactName:this.state.contactName});
        console.log(moreTtransferData);
        this.setState({
            moreTtransferData
        });
    }

    deleteTransfer(index){
        console.log("删除的地址是: \n", index);
        let {moreTtransferData} = this.state;
        moreTtransferData.splice(index, 1);
        this.setState({
            moreTtransferData
        });
    }

    nextPage(){
        console.log('确认转账页面');
        this.setState({nextpage:true});
    }

    // 提交更多交易
    submitMoreTransfer() {
        let {moreTtransferData} = this.state;
        console.log(moreTtransferData);
        fetch(`${server_url}/api/chain/moretransfer`, {
            body: JSON.stringify(moreTtransferData),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(response => response.json()).then( data => {
            console.log(data);
            if(data.code == 0){
                console.log('is ok');
                this.props.closeModel();
            }
        })
    }

    render() {
        let { contactAddress, nextpage, moreTtransferData, isSearch } = this.state; 
        let searchSelect,nextPageTh,tableWiew = '';
        if(isSearch){
            searchSelect = <div className="select is-multiple is-info">
                                <select multiple size="5">
                                     {/* <option value="Argentina">Argentina</option> */}
                                     {this.getAddress()}
                                </select>
                            </div>;
        }
        if (nextpage) {
            nextPageTh = <th>
                金额
            </th>;
                tableWiew = moreTtransferData.map((data, index) => {
                return (
                    <tr key={index} >
                        <td>
                            {data.contactName}
                        </td>
                        <td>
                            {data.toAddress}
                        </td>  
                        <td>
                              <a 
                                className="button is-text"
                                onClick={() => this.deleteTransfer(index)}
                               >
                                移除
                               </a>  
                        </td> 
                        <td>
                            <p className="control">
                                <input className="input" type="text" value={data.amount} placeholder="额度" onChange={this.amountSet.bind(this,index)}/>
                            </p>
                        </td>    
                    </tr>  
                );
            });
            // nextPageTd= <td>
            //  <a 
            //    className="button is-text"
            //    onClick={() => this.deleteTransfer(index)}
            //   >
            //   移除
            //   </a>  
            // </td>; 
        } else {
            tableWiew = moreTtransferData.map((data, index) => {
                return (
                    <tr key={index} >
                        <td>
                            {data.contactName}
                        </td>
                        <td>
                            {data.toAddress}
                        </td>  
                        <td>
                              <a 
                                className="button is-text"
                                onClick={() => this.deleteTransfer(index)}
                               >
                               移除
                               </a>  
                        </td>    
                    </tr>  
                );
            });
        }
        
        /**
         * 载入表格数据
         */
       // let { moreTtransferData } = this.state;
        console.log(moreTtransferData);

        return (
            <div>
                {
                    nextpage?
                    <div>
                        {/* meee */}
                    </div>    
                    :
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
                            {/* <div className="field">
                                <label className="label">转账金额:</label>
                                <div className="control has-icons-left has-icons-right">
                                    <input
                                        className="input is-info" type="text" placeholder="账户金额"
                                        // onChange={this.amountSet}
                                    />
                                </div>
                            </div> */}
                            <div className="field has-text-centered">
                                <a
                                    className="button is-info is-rounded "
                                    onClick={() => this.addTransfer()}
                                >添加</a>
                            </div>
                    </div>
                }
             
                <table className="table  is-hoverable is-narrow is-fullwidth"  >
                <thead>
                    <tr>
                    <th> 备注 </th>
                    <th>地址</th>
                    <th> </th>
                        {nextPageTh}
                    </tr>
                </thead>
                <tbody >    
                    {tableWiew} 
                </tbody>
                </table> 
                <div className="field has-text-centered">
                    {
                        nextpage?
                            <a
                                className="button is-info is-rounded "
                                onClick={() => this.submitMoreTransfer()}
                            >
                                确定
                            </a>
                        :
                            <a
                                className="button is-info is-rounded "
                                onClick={() => this.nextPage()}
                            >
                                下一步
                            </a>
                    }
                    
                </div>
            </div>
        );
    }
});

export default ERC20AddMoreTransfer;