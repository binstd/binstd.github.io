import React, { Component } from 'react';
import Header from '../../components/Header';
import Foot from '../../components/Foot';
import Box from 'grommet/components/Box';
import Toast from 'grommet/components/Toast';

import { observer } from 'mobx-react';
import { navigateTo } from "gatsby-link";


import LeftMenu from "../../components/dapp/LeftMenu";
// import UserDapp from '../../components/dapp/UserDapp';
const menulist = [
    {
        label: '数据:',
        child_list: [
            {
                label: '仪表盘',
                link: 'index-data'
            },

        ]
    },
    {
        label: '操作:',
        child_list: [
            {
                label: '转账任务',
                link: '/databoard'
            },
            {
                label: '添加托管人',
                link: '/databoard'
            },
            {
                label: '添加转账地址',
                link: '/databoard'
            }
        ]

    },
    {
        label: '设置:',
        child_list: [
            {
                label: '团队',
                link: '/databoard'
            },
            {
                label: '开发',
                link: '/databoard'
            }
        ]
    }
];

const ManagePage = observer(class CreatePage extends Component {

    constructor() {
        super();
        this.state = {
            showtoast: false,   //弹出提醒
            tolink: 'index',
        };
    }

    ToLink(link) {
        console.log(link);
        this.setState({
            tolink: link
        });
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
            <div className="grommet">
                <Header />
                <div style={{ background: '#f5f5f5' }} >
                    <div className="columns is-1" style={{ margin: 5 }}>
                        <div className="column is-narrow">
                            <LeftMenu menulist={menulist} ToLink={(link) => this.ToLink(link)} />
                        </div>
                        <div className="column" style={{ margin: 5 }}>
                            <div className="box">
                                <div className="tabs is-right is-small" >
                                    <ul>
                                        <li className="is-active is-left"><a>仪表盘</a></li>
                                        <li className="is-right" ><a>正在托管</a></li>
                                        <li className="is-right" ><a>待处理转账</a></li>
                                        <li className="is-right" ><a>转账地址</a></li>
                                    </ul>
                                </div>

                                <div className="column">
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
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <Foot style="" />
            </div>
        )
    }
});

export default ManagePage
