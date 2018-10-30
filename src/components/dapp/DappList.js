import React, { Component } from 'react';

import Box from 'grommet/components/Box';

import Toast from 'grommet/components/Toast';
import { observer } from 'mobx-react';
import user_model from '../../model/user_model';
import { navigateTo } from "gatsby-link";
import { server_url } from '../../lib/config';

const DappList = observer(class DappList extends Component {
    constructor() {
        super();
        this.state = {
            Loading: false,
            showtoast: false,
            myDappCount: '',
            myDappList: {}
        };
    }
    componentWillReact(){
        if(user_model.address ) {
            navigateTo('/dapp/index');
        }
    }
    componentDidMount() {
        let auth, address = "";
        if (localStorage.getItem("userinfo")) {
            let userinfo = JSON.parse(localStorage.getItem("userinfo"));
            // userdapp =  JSON.parse(localStorage.getItem("userdapp"));
            auth = userinfo.auth.accessToken;
            address = userinfo.address;
            fetch(`${server_url}/api/dapp/${address}`, {
                headers: {
                    Authorization: `Bearer ${auth}`
                }
            }).then(response => response.json())
                .then(data => {
                    this.setState({
                        myDappCount: data.length,
                        myDappList: data
                    });
                    localStorage.setItem("userdapp", JSON.stringify(data));
                    if (data.length == 1) {
                        navigateTo('/dapp/manage/' + data[0].id);
                    } else if (data.length > 1) {
                        navigateTo('/dapp/mylist');
                    } else {
                        this.setState({
                            Loading: true
                        });
                    }
                }).catch(err =>{
                });
        }else {
            this.setState({
                Loading: true
            });
        }

    }

    render() {
        const { showtoast} = this.state;
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
                {
                    this.state.Loading ?
                        <div className="container is-fluid">

                            <nav className="level">
                                <div className="level-left">
                                </div>
                                <div className="level-right box">
                                    <a
                                        className="button is-info is-outlined"
                                        href="/dapp/import"
                                    >
                                        导入合约
                                    </a>
                                </div>
                            </nav>

                            <div className="columns  is-multiline is-centered has-text-centered">
                                <div
                                    className="column is-3 is-narrow has-text-centered"
                                    onClick={() => navigateTo('/dapp/create')}
                                // onClick={ () => navigateTo('/dappinfo?dapp=erc20')}
                                >
                                    <a href="#">
                                        <article className="tile is-child box">
                                            <figure className="image is-3by3 ">
                                                <img src="https://blockluz-1253389096.cos.ap-beijing.myqcloud.com/blockman/atomic-swap-erc20.png" />
                                            </figure>
                                            <p className="title" style={{marginBottom:"3px"}} >ERC20</p>
                                            <p className="">将部署一个标准的ERO20toekn</p>
                                        </article>
                                    </a>
                                </div>

                                <div className="column is-3 is-narrow has-text-centered">
                                    <article className="tile is-child box">

                                        <figure className="image is-3by3 ">
                                            <img src="https://blockluz-1253389096.cos.ap-beijing.myqcloud.com/blockman/airport.png" />
                                        </figure>
                                        <p className="title" style={{marginBottom:"3px"}}>ERC721 </p>
                                        <p className="">部署一个标准的ERO721合约,实现非同质化资产上链确权</p>
                                    </article>
                                </div>
                                <div className="column is-3 is-narrow has-text-centered">
                                    <article className="tile is-child box">

                                        <figure className="image is-3by3 ">
                                   
                                            <img src="https://blockluz-1253389096.cos.ap-beijing.myqcloud.com/blockman/airport.png" />
                                        </figure>
                                        <p className="title" style={{marginBottom:"3px"}} >空投合约</p>
                                        <p className="">部署一个空投合约</p>
                                    </article>
                                </div>

                                {/* <div className="column is-3 is-narrow has-text-centered">
                                    <article className="tile is-child box">

                                        <figure className="image is-3by3 ">
                                            <img src="https://blockluz-1253389096.cos.ap-beijing.myqcloud.com/blockman/atomic-swap-erc20.png" />
                                        </figure>
                                        <p className="title">ERC20</p>
                                        <p className="subtitle">将部署一个标准的ERO20toekn,管理转账</p>
                                    </article>
                                </div> */}
                            </div>
                            {toast}
                        </div>
                        :
                        ''
                }

            </div>
        )

    }
});

export default DappList
