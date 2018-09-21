import React, { Component } from 'react';

import Box from 'grommet/components/Box';
import Toast from 'grommet/components/Toast';

import classNames from 'classnames/bind';
import { observer } from 'mobx-react';
import user_model from '../../model/user_model';
import { navigateTo } from "gatsby-link";
import LeftMenu from "./LeftMenu";

import ERC20AddContact from "./ERC20AddContact";
import ERC20AddApprove from "./ERC20AddApprove";
import ContactList from "./ContactList";
const menulist = [
    {
        label: '数据:',
        child_list:[
            {
                label:'仪表盘',
                link:'index',
                
            },
        ]
    },
    {
        label: '操作:',
        child_list:[
            {
                label:'转账任务',
                link:'/databoard',
            },
            {
                label:'添加托管人',
                link:'approve',
            },
            {
                label:'添加地址备注',
                link:'contact',
            }    
        ]
    },
    {
        label: '设置:',
        child_list:[
         {
            label:'团队',
            link:'/databoard',
         },
         {
            label:'开发',
            link:'/databoard',
         }  
        ]
    }
];



const ERC20Manage = observer(class ERC20Manage extends Component {
    
    constructor() {
        super();
        this.state = {
            showtoast: false,   //弹出提醒
            label:'',
            tolink:'index',
            isOpenModel:false,
            mainID:''
        };      
    }

    ToLink(child_menu) {
        console.log(child_menu);
        this.setState({
            tolink:child_menu.link, 
            isOpenModel:true,
            label:child_menu.label
        });
    }
    componentWillMount(){
        if(user_model.address){
            // console.log('已登录');
        } else {
            navigateTo('/dapp/index');
        }
    }
    
    closeModel() {
        this.setState({
            isOpenModel:false
        });   
    }

    chooseMainComponent(comp) {
        // this.setState({mainID});
        console.log('comp:',comp);;
        this.setState({mainID:comp})
    }

    render() {
        let {tolink, isOpenModel, mainID } = this.state;
        let modelComponent,mainComponent = '';
        // let mainComponent = 

        switch(tolink){
            case 'index':
                isOpenModel = false;
                break;
            case 'contact':
                modelComponent = <ERC20AddContact dappid="1"  closeModel={() => this.closeModel()}  />
                break;
            case 'approve':    
                modelComponent = <ERC20AddApprove dappid="1"  closeModel={() => this.closeModel()}  />
                break;    
            default:
                break;  
        }

        switch(mainID){
            case 'contact':
                console.log('mainID');
                mainComponent = <ContactList  />
                break;
            default:
                mainComponent = <div>
                                    <nav className="level is-mobile">
                                        <div className="level-item has-text-centered">
                                            <div>
                                                <p className="heading">token名称</p>
                                                <p className="title">Binstd Network</p>
                                            </div>
                                        </div>
                                        <div className="level-item has-text-centered">
                                            <div>
                                                <p className="heading">token缩写</p>
                                                <p className="title">SDT</p>
                                            </div>
                                        </div>
                                        <div className="level-item has-text-centered">
                                            <div>
                                                <p className="heading">小数点位数</p>
                                                <p className="title">18</p>
                                            </div>
                                        </div>
                                    </nav>
                                    {this.state.tolink} 
                                </div> ;
                break;                
        }
        

        const { showtoast } = this.state;
        let toast;
        if (showtoast) {
          toast = (
            <Toast 
                status='warning' 
                onClose={() => this.setState({ showtoast: false })}
            >
            <Box direction='row' justify='between' alignSelf='center' >
                <span>DAPP即将上线, 请耐心等待！</span>
            </Box>
            </Toast>
          );
        }
        var modelClass = classNames({
            modal: true,
            'is-active': isOpenModel
        });
        // #f5f5f5
        return (    
            <div style={{background:'#f5f5f5'}} > 
                <div className="columns  is-1" style={{margin:5}}>
                    <div className="column is-narrow">
                        <LeftMenu menulist={menulist}  ToLink={(child_menu) => this.ToLink(child_menu)} />
                    </div>
                    <div className="column" style={{margin:5}}>
                        <div className="box">
                            <div className="tabs is-right is-small" >
                                <ul>
                                    <li className="is-active is-left"><a onClick={() => this.chooseMainComponent('/')} >仪表盘</a></li>
                                    <li className="is-right" ><a>正在托管</a></li>
                                    <li className="is-right" ><a>待处理转账</a></li>
                                    <li className="is-right" onClick={() => this.chooseMainComponent('contact')} ><a>转账地址</a></li>
                                </ul>
                            </div>
                            <div className="column">
                                {mainComponent}
                            </div>  

                        </div>

                        <div className={modelClass} style={{background:'#fff'}}  >
                            <div className="modal-background"  onClick={() => this.closeModel()} >
                            </div>
                            <div className="modal-card">
                                    <header className="modal-card-head " style={{background:'#fff'}}  >
                                        <p className="modal-card-title"> 
                                            {this.state.label} 
                                        </p>
                                        <button className="delete" aria-label="close" onClick={() => this.closeModel()} ></button>
                                    </header>
                                <section className="modal-card-body">
                                    {modelComponent} 
                                </section>
                            </div>
                        </div>

                        {/* <div class={modelClass} style={{background:'#fff'}} >
                            <div class="modal-background" onClick={() => this.closeModel()} > </div>
                            <div class="modal-content">
                                {modelComponent} 
                            </div>
                            <button class="modal-close is-large" aria-label="close" onClick={() => this.closeModel()} ></button>
                        </div> */}

                    </div>

                </div>

            </div> 
        )
        
    }
});

export default ERC20Manage
