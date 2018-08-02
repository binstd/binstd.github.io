import React, { Component } from 'react';
import Heading from 'grommet/components/Heading';
import Header from 'grommet/components/Header';
import Paragraph from 'grommet/components/Paragraph';

import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';


import Image from 'grommet/components/Image';
import ReactGrommetSketch from '../img/ReactGrommetSketch.js';
import Anchor from 'grommet/components/Anchor';
import AccessibleIcon from
  'grommet/components/icons/base/Accessible';



export default class Cando extends Component {
  render() {
    return (
       <div>
         <Box pad='large' align='center' >
            {/* <ReactGrommetSketch /> */}
            <Image 
                src='https://blockluz-1253389096.cos.ap-beijing.myqcloud.com/blockman/Icon500.png'
                style={{height:250,width:250}}
                className='logo'
            />
          </Box>
          <Box align='center' pad='large'>
            <Heading tag='h2' align='center' strong={true}
              style={{ color: '#07AEFF' }}
            >
              binstd可以做什么
            </Heading>

            <Paragraph align='center'
              style={{ color: '#07AEFF' }}
            >
              我们提供：
               <Anchor path='/docs/learn'>
                一键式的合约部署
              </Anchor>, <Anchor path='/docs/components'>
                多种公链支持
              </Anchor>,为开发者提供自己熟悉的语言的:<Anchor path='/docs/resources'>
                区块链业务支持的sdk,
              </Anchor>无需学习区块链合约编程,区块链开发知识，就可以开发： <Anchor href='https://facebook.github.io/react/'>
                去中心化应用
              </Anchor> ，同样也支持无需开发的 <Anchor href='https://www.sketchapp.com/'>
                模版化的去中心化网店，支付等支持。
              </Anchor>
            </Paragraph>

            <Button 
                style={{ color: '#07AEFF', border: '2px solid #07AEFF' }} 
                path='/docs/start' 
                label='点我开始' 
            />
          </Box>
      </div> 
    );
  }
};
