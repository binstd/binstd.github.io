import React, { Component } from 'react';
import Heading from 'grommet/components/Heading';
import Footer from 'grommet/components/Footer';

import Paragraph from 'grommet/components/Paragraph';

import Anchor from 'grommet/components/Anchor';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import GithubIcon from 'grommet/components/icons/base/SocialGithub';


export default class HomeHeader extends Component {
  render() {
    return (
      <div>
        <Box 
            primary={true} 
            pad='medium'
        // pad={{ vertical: 'large' }} 
          direction='column'
          justify='center' align='center' flex='grow'>
          <Heading align='center' tag="h1" style={{ color: '#07AEFF' }}  >通证云 </Heading>
          <Paragraph align='center' style={{ color: '#07AEFF' }}  >BINSTD（BINARY DIGIT STANDARD）零开发成本的，区块链云服务平台</Paragraph>
          <Button label='了解更多' align='center' style={{ color: '#07AEFF',  background:'#fff', border: '2px solid #07AEFF' }} href='http://doc.binstd.com/' primary={true} />
        
        </Box>
        <Footer appCentered={true} justify='center'>
          <Anchor style={{ color: '#f5f5f5' }} href='https://github.com/binstd'  target="_blank" 
            icon={<GithubIcon />} />
         
      
        </Footer>
      </div>
    );
  }
};
