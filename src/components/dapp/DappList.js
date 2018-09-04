import React, { Component } from 'react';

import Box from 'grommet/components/Box';
import Card from 'grommet/components/Card';
import Columns from 'grommet/components/Columns';
import Toast from 'grommet/components/Toast';

import { observer } from 'mobx-react';

import {navigateTo}  from "gatsby-link";

const DappList = observer(class DappList extends Component {
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
            <Columns 
                justify='center'
                //  align='center'
                masonry={false}
                maxCount={3}
                size = 'small' 
                // colorIndex='light-2'
                //  margin='xlarge'
                className = 'dapp-list-col'
                // pad='medium'
            >
                <Card 
                    href='/dappmanage'
                    margin='small'
                    thumbnail='https://blockluz-1253389096.cos.ap-beijing.myqcloud.com/blockman/atomic-swap-erc20.png'
                    heading='ERC20'
                    description='将部署一个标准的ERO20toekn,管理转账'
                    // contentPad='none'
                    colorIndex='light-1'
                    onClick={ () => navigateTo('/dappinfo?dapp=erc20')}
                />

                 <Card 
                    // pad='medium'
                    margin='small'
                    thumbnail='https://blockluz-1253389096.cos.ap-beijing.myqcloud.com/blockman/085702.jpg'
                    heading='担保合同合约'
                    description='可用于租赁，买卖二手等'
                    // contentPad='none'
                    colorIndex='light-1'
                    onClick={() => this.setState({ showtoast: true })} 
                />
                
                 <Card 
                    // pad='medium'
                    margin='small'
                    style=""
                    thumbnail='https://blockluz-1253389096.cos.ap-beijing.myqcloud.com/blockman/085702.jpg'
                    heading='ERC721合约'
                    description='确保唯一性的erc721合约'
                    // contentPad='none'
                    colorIndex='light-1'
                    onClick={() => this.setState({ showtoast: true })} 
                />
                {toast}
            </Columns>     
        )
        
    }
});

export default DappList
