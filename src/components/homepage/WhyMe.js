import React, { Component } from 'react';
import Heading from 'grommet/components/Heading';
import Header from 'grommet/components/Header';
import Paragraph from 'grommet/components/Paragraph';
import Tiles from 'grommet/components/Tiles';
import Animate from 'grommet/components/Animate';


import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';

import Tile from 'grommet/components/Tile';


import AccessibleIcon from
  'grommet/components/icons/base/Accessible';
import ResourcesIcon from 'grommet/components/icons/base/Resources';
import ConfigureIcon from 'grommet/components/icons/base/Configure';
import RunIcon from 'grommet/components/icons/base/Run';

const WhyGrommetItem = (props) => (
  <Tile basis='medium' pad='small'>
    <Animate visible='scroll' keep={true}
      enter={{
        animation: 'slide-up', duration: 1000,
        delay: (props.delay || 100)
      }}>
      <Button href={props.href} path={props.path} style={{ color: 'white' }} >
        <Box 
            pad={{ between: 'small', vertical: 'small' }}
        >
          <Header direction='column' pad={{ between: 'medium' }}>
            {props.icon}
            <Heading tag='h3' margin='none'>
              {props.heading}
            </Heading>
          </Header>
          <Box 
            pad={{ horizontal: 'medium' }}
          >
            {props.children}
          </Box>
        </Box>
      </Button>
    </Animate>
  </Tile>
);

export default class WhyMe extends Component {
  render() {
    return (
       <div>
         <Box
             primary={true} 
            // pad={{ vertical: 'large' }} 
            pad='medium'
            direction='column'
            justify='center' 
            align='center' 
            flex='grow'>
          <Heading tag='h2' strong={true} style={{ color: 'white' }}>为什么选择我们?</Heading>
         
          <Paragraph 
            align='center'
            style={{ color: 'white' }}
          >
            我们为你提供零成本的：从传统互联网应用开发到面向区块链的开发的云服务。
          </Paragraph>
          </Box>
          <Tiles justify='center'
            // pad={{ vertical: 'medium' }}
            >
            <WhyGrommetItem icon={<ResourcesIcon colorIndex='light-1'
              size='large' />}
              heading='支持多个公链网络' path='/' delay={100}
              color='light-1'
              style={{ color: 'white' }}
            >
              <Paragraph align='center' margin='none'
               style={{ color: 'white' }}
              >
                我们提供多个公链网络,您可根据自身业务,选择特定的公链，侧链，offchain的中间层。
                我们也为您提供基于去中心化的ipfs的存储云以及去中心化database。
              </Paragraph>
            </WhyGrommetItem>
            <WhyGrommetItem icon={<RunIcon colorIndex='light-1'
              size='large' />}
              heading='快速开发部署' href='/' delay={300}>
              <Paragraph align='center' margin='none'
               style={{ color: '#ffffff' }}
              >
                一键式的部署合约,发行通证，并将通证用于自身应用程序中。实现他们，需要花时间学习区块链开发(solidity,web3，部署节点等)。
              </Paragraph>
            </WhyGrommetItem>
            <WhyGrommetItem icon={<ConfigureIcon colorIndex='light-1'
              size='large' />}
              heading='多种编程语言的SDK,API' path='/docs/learn' delay={500}>
              <Paragraph align='center' margin='none'
               style={{ color: 'white' }}
              >
                你可以方便的使用自己熟悉的编程语言，和我们提供的开发工具，开发去中心化的区块链应用，甚至免开发，直接部署。
              </Paragraph>
            </WhyGrommetItem>

          </Tiles>
      </div> 
    );
  }
};
