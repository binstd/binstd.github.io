import React, { Component } from 'react';
import Heading from 'grommet/components/Heading';
import Footer from 'grommet/components/Footer';

import Paragraph from 'grommet/components/Paragraph';

import Anchor from 'grommet/components/Anchor';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';
import GithubIcon from 'grommet/components/icons/base/SocialGithub';

export default class HomeHeader extends Component {
  render() {
    return (
        <Box 
            primary={true} 
            pad='medium'
          direction='column'
          justify='center' align='center' flex='grow'>
          <Image 
                src='https://programmerinnfile.b0.upaiyun.com/community/10001/20180814/gtps22W33s.png'
                style={{height:100,width:360}}
                className='logo'
          />
          <Heading align='center' tag="h1" style={{ color: '#07AEFF' , margin: '60px 0 0'}} strong={true}>进制，区块链云服务平台</Heading>
          <Paragraph align='center' style={{ color: '#1D2A3A' }}  >Binary Standard Foundation – BinSTD，标准技术开发者生态</Paragraph>
          <Button label='了解更多' align='center' style={{ color: '#07AEFF',  background:'#fff', border: '2px solid #07AEFF' }} href='/info' primary={true} />
        </Box>
    );
  }
};
