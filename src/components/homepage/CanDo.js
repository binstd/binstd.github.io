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
          <Box align='center' pad='large'>
            <Heading tag='h2' align='center' strong={true}
              style={{ color: '#00AFFF' }}
            >
              我们提供
            </Heading>

            <Paragraph align='center'
              style={{ color: '#1D2A3A' }}
            >
            一键部署合约；多种公链支持；提供功能丰富的API，常用语言SDK封装；无需学习区块链合约编程，急速上手开发
            </Paragraph>

            <Button 
                style={{ color: '#07AEFF', border: '2px solid #07AEFF' }} 
                path='/docs/zh/started' 
                label='立即开始' 
            />
          </Box>
      </div> 
    );
  }
};
