import React  from 'react';
import { eth } from '../../lib/eth';

export default class DappDeployed extends  React.Component {

    constructor (props) { 
        super();
        this.state = {
            network_url:'', 
        }
    }

    componentDidMount() {
        var network_url = '';
        eth.net_version().then((result) => {
            switch (result) {
                case "1":
                    console.log('This is mainnet')
                    network_url = 'https://etherscan.io'
                    break
                case "2":
                    console.log('This is the deprecated Morden test network.')
                    network_url = 'eth_morden'
                    break
                case "3":
                    console.log('This is the ropsten test network.')
                    network_url = 'https://ropsten.etherscan.io'
                    break
                case "4":
                    console.log('This is the Rinkeby test network.')
                    network_url = 'https://rinkeby.etherscan.io'
                    break
                case "42":
                    console.log('This is the Kovan test network.')
                    network_url = 'https://kovan.etherscan.io'
                    break
                default:
                    console.log('This is an unknown network.')
                    network_url = 'eth_unknown'
            }
            this.setState({
                network_url
            });
        })
    }

    render (){
        const {network_url} = this.state;
        return (
            <div>
           
                <div className="bd-snippet-preview" style={{'margin':'60px auto'}} >
                <p className="title is-5 is-spaced">合约部署结果:</p>
                {/* <p className="subtitle is-5"></p> */}
                <h6 className="title is-6">交易hash如下,点击进入区块链浏览器查看网络处理状态:</h6>

                    <p className="subtitle is-6">
                        <a href={network_url+'/tx/'+this.props.txhash} target="_Blank" >
                            {this.props.txhash}
                        </a> 
                    </p>
                </div>
            </div>
        )
    }
} 


