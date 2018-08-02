import React from 'react';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';
import Image from 'grommet/components/Image';
import Button from 'grommet/components/Button';

export default function AppHeader (props) {
  return (
 
    <Header 
      justify="center" 
      fixed={true}
     >
      <Box size={{width: {max: 'xxlarge'}}} direction="row"
        responsive={false} justify="start" align="center" 
        pad={{horizontal: 'medium'}} flex="grow"  >
        <Image 
          src='https://blockluz-1253389096.cos.ap-beijing.myqcloud.com/blockman/Icon500.png'
          style={{height:50,width:50}}
           />
        {/* <HpiIcon colorIndex="brand" size="large" /> */}
        <Box pad="small" />
          <Menu label="导航" inline={true} direction="row" >
            <Anchor path="/"> 首页</Anchor>
            <Anchor href="/tags/服务"  > 服务</Anchor>
            <Anchor href="/docs/zh/get-started/"> 文档</Anchor>
            <Anchor href="https://github.com/binstd/tplan" target="_blank" > 翻译计划</Anchor>
            <Anchor href="/info" > 关于 </Anchor>
          </Menu>
          
        <Box flex="grow" align="end">
        <Button label='登录/注册'
          // style={{ color:'#f5f5f5'}} 
          href='http://doc.binstd.com/' />
        
        </Box>
      </Box>
    </Header>
  );
};
