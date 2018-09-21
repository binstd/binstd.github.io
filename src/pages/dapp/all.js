import React, { Component } from 'react';
import Header from '../../components/Header';
import Foot from '../../components/Foot';
import Box from 'grommet/components/Box';
import Toast from 'grommet/components/Toast';

import { observer } from 'mobx-react';
import { navigateTo } from "gatsby-link";

// import UserDapp from '../../components/dapp/UserDapp';

const AllPage = observer(class CreatePage extends Component {

    constructor() {
        super();
        this.state = {
            showtoast: false,
        };

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
            <div >
                <Header />
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
                                    <p className="title">ERC20</p>
                                    <p className="subtitle">将部署一个标准的ERO20toekn,管理转账</p>
                                </article>
                            </a>
                        </div>

                        <div className="column is-3 is-narrow has-text-centered">
                            <article className="tile is-child box">

                                <figure className="image is-3by3 ">
                                    <img src="https://blockluz-1253389096.cos.ap-beijing.myqcloud.com/blockman/085702.jpg" />
                                </figure>
                                <p className="title">ERC20</p>
                                <p className="subtitle">将部署一个标准的ERO20toekn,管理转账</p>
                            </article>
                        </div>
                        <div className="column is-3 is-narrow has-text-centered">
                            <article className="tile is-child box">

                                <figure className="image is-3by3 ">
                                    <img src="https://blockluz-1253389096.cos.ap-beijing.myqcloud.com/blockman/085702.jpg" />
                                </figure>
                                <p className="title">ERC20</p>
                                <p className="subtitle">将部署一个标准的ERO20toekn,管理转账</p>
                            </article>
                        </div>

                        <div className="column is-3 is-narrow has-text-centered">
                            <article className="tile is-child box">

                                <figure className="image is-3by3 ">
                                    <img src="https://blockluz-1253389096.cos.ap-beijing.myqcloud.com/blockman/atomic-swap-erc20.png" />
                                </figure>
                                <p className="title">ERC20</p>
                                <p className="subtitle">将部署一个标准的ERO20toekn,管理转账</p>
                            </article>
                        </div>
                    </div>
                    {toast}
                </div>
                <Foot style="" />
            </div>
        )
    }
});

export default AllPage
