import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Blogs from './Blogs';

import Section from 'grommet/components/Section';
import Article from 'grommet/components/Article';
import Button from 'grommet/components/Button';
import Animate from 'grommet/components/Animate';

import Header from 'grommet/components/Header';

import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';


import ResourcesIcon from 'grommet/components/icons/base/Resources';
import ConfigureIcon from 'grommet/components/icons/base/Configure';
import RunIcon from 'grommet/components/icons/base/Run';
import Headline from 'grommet/components/Headline';
import CubesIcon from 'grommet/components/icons/base/Cubes';
import ComplianceIcon from 'grommet/components/icons/base/Compliance';

class HomeSection extends Component {
  render() {
    const { animate, children, ...props } = this.props;
    let contents = (
      <Section justify='center' align='center'
        pad={{ vertical: 'large' }} {...props} >
        {children}
      </Section>
    );
    if (animate) {
      contents = (
        <Animate visible='scroll' keep={true}
          enter={{ animation: 'fade', duration: 1000, delay: 100 }}>
          {contents}
        </Animate>
      );
    }
    return contents;
  }
};

const WhyGrommetItem = (props) => (
  <Tile basis='medium' pad='small'>
    <Animate visible='scroll' keep={true}
      enter={{
        animation: 'slide-up', duration: 1000,
        delay: (props.delay || 100)
      }}>
      <Button href={props.href} path={props.path}>
        <Box pad={{ between: 'small', vertical: 'small' }}>
          <Header direction='column' pad={{ between: 'medium' }}>
            {props.icon}
            <Heading tag='h3' margin='none'>
              {props.heading}
            </Heading>
          </Header>
          <Box pad={{ horizontal: 'medium' }}>
              {props.children}
          </Box>
        </Box>
      </Button>
    </Animate>
  </Tile>
);


export default class PrimaryPage extends Component {
  render() {
    return (
     <div>
		<Section full={true} 
			style={{backgroundColor:'#07AEFF', color:'white'}} 
          // style={{backgroundColor:'#00DEFF', color:'white'}}
          // texture="url('https://programmerinnfile.b0.upaiyun.com/community/10001/20180412/FNRvTz6GZ8.jpg')"
          pad="large" justify="center" align="center">

          <Heading tag="h1"  style={{ color:'#f5f5f5'}}  >通证云 </Heading>
          <Paragraph style={{ color:'#f5f5f5'}}  >BINSTD（BINARY DIGIT STANDARD）区块链云服务平台</Paragraph>
          <Button label='了解更多' style={{ color:'#f5f5f5',border: '2px solid #f5f5f5'}}   href='http://doc.binstd.com/'   primary={true}/>
        </Section>

      
        <HomeSection separator='top' animate={true}>
          <Heading tag='h2' strong={true}  >为什么选择Binstd</Heading>
          <Paragraph align='center' >
            为区块链落地而生，首个区块链云服务平台,通证发行，构造去中心化应用，从未如此简单
          </Paragraph>
          <Tiles justify='center'
            pad={{ vertical: 'medium' }}>
            <WhyGrommetItem icon={<ResourcesIcon colorIndex='brand'
              size='large' />}
              heading='数字通证发行' path='/docs/components' delay={100}>
              <Paragraph align='center' margin='none'>
			          发行平台独有数字通证：积分、票卷、虚拟商品
              </Paragraph>
            </WhyGrommetItem>
            <WhyGrommetItem icon={<RunIcon colorIndex='brand'
              size='large' />}
              heading='智能钱包' href='http://slackin.grommet.io' delay={300}>
              <Paragraph align='center' margin='none'>
			        存储交易独有数字通证：积分、票卷、虚拟商品
              </Paragraph>
            </WhyGrommetItem>
            <WhyGrommetItem icon={<ConfigureIcon colorIndex='brand'
              size='large' />}
              heading='跨链云服务' path='/docs/learn' delay={500}>
              <Paragraph align='center' margin='none'>
			         BIN自行跨链云服务支持 免手续费，交易加速
              </Paragraph>
            </WhyGrommetItem>
            <WhyGrommetItem icon={<ResourcesIcon colorIndex='brand'
              size='large' />}
              heading='数字通证发行' path='/docs/components' delay={100}>
              <Paragraph align='center' margin='none'>
			        发行平台独有数字通证：积分、票卷、虚拟商品
              </Paragraph>
            </WhyGrommetItem>
            <WhyGrommetItem icon={<RunIcon colorIndex='brand'
              size='large' />}
              heading='智能钱包' href='http://slackin.grommet.io' delay={300}>
              <Paragraph align='center' margin='none'>
			          存储交易独有数字通证：积分、票卷、虚拟商品
              </Paragraph>
            </WhyGrommetItem>
            <WhyGrommetItem icon={<ConfigureIcon colorIndex='brand'
              size='large' />}
              heading='跨链云服务' path='/docs/learn' delay={500}>
              <Paragraph align='center' margin='none'>
			            BIN自行跨链云服务支持 免手续费，交易加速
              </Paragraph>
            </WhyGrommetItem>
           
          </Tiles>

				<Box 
				    align="center"
				    size={{ "width": "xxlarge" }} 
				    pad={{ horizontal: "large" }}
				>
					<Heading tag="h2" strong={true}>
					官方Blog
					</Heading>
          		</Box>
            <Blogs />
        </HomeSection>
		
		
		<Section full={true} style={{backgroundColor:'#07AEFF', color:'white'}} 
          pad="large" align="center">
		  <HomeSection  animate={true}>
          <Heading tag="h2">BinSTD能做什么？</Heading>
          <Paragraph size='medium' style={{ color:'#f5f5f5'}} >
		  	
            </Paragraph>
            <Box size={{width: {max: "xxlarge"}}} direction="row">
              <Box pad="medium" basis="1/2">
                <CubesIcon colorIndex="light-1" size="large" />
                <Headline size="small" strong={true} margin="medium">
                  Lorem ipsum dolor sit amet
                </Headline>
                <Paragraph margin="none" style={{ color:'#f5f5f5'}} >
                  Lorem ipsum dolor sit amet, dicat sonet congue ei mei, est summo copiosae 
                  facilisi an. Sumo accumsan mel ea, eu ignota hendrerit consequuntur me.
                </Paragraph>
              </Box>
              <Box pad="medium" basis="1/2">
                
                <ComplianceIcon colorIndex="light-1" size="large" />
                <Headline size="small" strong={true} margin="medium">
                  Lorem ipsum dolor sit amet
                </Headline>
                <Paragraph margin="none" style={{ color:'#f5f5f5'}} >
                  Lorem ipsum dolor sit amet, dicat sonet congue ei mei, est summo copiosae 
                  facilisi an. Sumo accumsan mel ea, eu ignota hendrerit consequuntur me.
                </Paragraph>
              </Box>
          </Box>

		     <Box size={{width: {max: "xxlarge"}}} direction="row">
              <Box pad="medium" basis="1/2">
                <CubesIcon colorIndex="light-1" size="large" />
                <Headline size="small" strong={true} margin="medium">
                  Lorem ipsum dolor sit amet
                </Headline>
                <Paragraph margin="none" style={{ color:'#f5f5f5'}} >
                  Lorem ipsum dolor sit amet, dicat sonet congue ei mei, est summo copiosae 
                  facilisi an. Sumo accumsan mel ea, eu ignota hendrerit consequuntur me.
                </Paragraph>
              </Box>
              <Box pad="medium" basis="1/2">
                
                <ComplianceIcon colorIndex="light-1" size="large" />
                <Headline size="small" strong={true} margin="medium">
                  Lorem ipsum dolor sit amet
                </Headline>
                <Paragraph margin="none" style={{ color:'#f5f5f5'}} >
                  Lorem ipsum dolor sit amet, dicat sonet congue ei mei, est summo copiosae 
                  facilisi an. Sumo accumsan mel ea, eu ignota hendrerit consequuntur me.
                </Paragraph>
              </Box>
          </Box>
		  </HomeSection>
        </Section>
		
        <Section full={true}
          pad="large" justify="center" align="center">
          {/* <Logo size="large" /> */}
          <Heading tag="h1">BinSTD</Heading>
          <Paragraph>xxxxxx....</Paragraph>
        </Section>
     
        </div>
    );
  }
};
