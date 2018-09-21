import React, { Component } from 'react';

import Box from 'grommet/components/Box';

import Toast from 'grommet/components/Toast';

import { observer } from 'mobx-react';

import {navigateTo}  from "gatsby-link";

const DappList = observer(class DappList extends Component {

    constructor(props) {
        super(props);
        let {myDappList} = props;
        // console.log(myDappList);
        this.state = {
            myDappList,
            showtoast: false,
        };
    }

    componentDidMount() {
        console.log(this.state.myDappList);
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
                <div className="container is-fluid">
                    <nav className="level">
                        <div className="level-left">
                        </div>

                        <div className="level-right box">
                                <a 
                                    className="button is-info is-outlined" 
                                    href="/dapp/import" 
                                    // onClick={ () => navigateTo('/dappinfo/')}
                                >
                                    导入新合约
                                </a>
                          
                        </div>
                    </nav>

                    <div className="columns  is-multiline is-centered has-text-centered">
                            <div 
                            className="column is-3 is-narrow has-text-centered"
                            onClick={ () => navigateTo('/dapp/create')}
                            >
                                 <a  href="#">
                                    <article className="tile is-child box">
                               
                                    <p className="title">ERC20</p>
                                    <p className="subtitle">将部署一个标准的ERO20toekn,管理转账</p>
                                    </article>
                                </a>
                            </div>
                        
                        <div className="column is-3 is-narrow has-text-centered">
                            <article className="tile is-child box">
                            <p className="title">ERC20</p>
                            <p className="subtitle">将部署一个标准的ERO20toekn,管理转账</p>
                            </article>
                        </div>
                        <div className="column is-3 is-narrow has-text-centered">
                            <article className="tile is-child box">
                            <p className="title">ERC20</p>
                            <p className="subtitle">将部署一个标准的ERO20toekn,管理转账</p>
                            </article>
                        </div>
                       
                        <div className="column is-3 is-narrow has-text-centered">
                            <article className="tile is-child box">
                        
                            <p className="title">ERC20</p>
                            <p className="subtitle">将部署一个标准的ERO20toekn,管理转账</p>
                            </article>
                        </div>
                    </div>
            {toast}
            </div>
        )
    }
});

export default DappList
