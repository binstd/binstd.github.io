import React, { Component } from 'react';


export default class DappDeployed extends  React.Component {
    constructor (props) { 
        super();
        // this.state = {
            
        // }
    }

    componentWillMount() {
        
    }

    render (){
        return (
            <div>
           
                <div className="bd-snippet-preview" style={{'margin':'60px auto'}} >
                <p className="title is-5 is-spaced">合约部署结果:</p>
                {/* <p className="subtitle is-5"></p> */}
                <h6 className="title is-6">交易hash如下,点击进入区块链浏览器查看网络处理状态:</h6>

                    <p className="subtitle is-6">
                        <a href={'https://kovan.etherscan.io/tx/'+this.props.txhash} target="_Blank" >
                            {this.props.txhash}
                        </a> 
                    </p>
                </div>
            </div>
        )
    }
} 


