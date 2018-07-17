// (C) Copyright 2014-2017 Hewlett Packard Enterprise Development LP
import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import Article from 'grommet/components/Article';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Footer from 'grommet/components/Footer';
import Section from 'grommet/components/Section';
import Paragraph from 'grommet/components/Paragraph';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Animate from 'grommet/components/Animate';
import GrommetLogo from 'grommet/components/icons/Grommet';
import UpIcon from 'grommet/components/icons/base/Up';
import DownIcon from 'grommet/components/icons/base/Down';
import SlackIcon from 'grommet/components/icons/base/SocialSlack';
import GithubIcon from 'grommet/components/icons/base/SocialGithub';
import FacebookIcon from 'grommet/components/icons/base/SocialFacebook';
import TwitterIcon from 'grommet/components/icons/base/SocialTwitter';
import ResourcesIcon from 'grommet/components/icons/base/Resources';
import AccessibleIcon from
  'grommet/components/icons/base/Accessible';
import ConfigureIcon from 'grommet/components/icons/base/Configure';
import RunIcon from 'grommet/components/icons/base/Run';
import GrommetIcon from 'grommet/components/icons/base/BrandGrommetOutline';
import ArubaIcon from 'grommet/components/icons/base/PlatformAruba';
import DXCIcon from 'grommet/components/icons/base/PlatformDxc';
import HPEIcon from 'grommet/components/icons/base/BrandHpeStack';
import HPIcon from 'grommet/components/icons/base/PlatformHpi';

import Image from 'grommet/components/Image';
// import Contents from './docs/Contents';
import Hands from './img/Hands.js';
import GrommetHero from './img/GrommetHero.js';
import ReactGrommetSketch from './img/ReactGrommetSketch.js';

//合作方
const THEMES = [
  {
    Icon: HPEIcon, url: '/hpe',
    size: 'xlarge'
  },
  { label: 'grommet', Icon: GrommetIcon, url: '/', size: 'large' },
  { Icon: ArubaIcon, url: '/aruba', size: 'xlarge' },
  { Icon: HPIcon, url: '/hpinc', size: 'large' },
  { Icon: DXCIcon, url: '/dxc', size: 'large' }
];

class HomeSection extends Component {
  render() {
    const { animate, children, ...props } = this.props;
    let contents = (
      <Section justify='center' align='center'
        pad={{ vertical: 'large' }} {...props}>
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
      <Button href={props.href} path={props.path} style={{ color: 'white' }} >
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

export default class Home extends Component {

  constructor() {
    super();
    this._onScroll = this._onScroll.bind(this);
    this._onResize = this._onResize.bind(this);
    this.state = {
      mobileNavHeight: 0, mobileOffset: 0, navActive: false
    };
  }

  componentDidMount() {
    // window.addEventListener('resize', this._onResize);
    // this._app = document.querySelector('.grommetux-app');
    // this._app.addEventListener('scroll', this._onScroll);
    if (document) {
      document.title = 'Grommet';
    }
    this._layout();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._onResize);
    // this._app.removeEventListener('scroll', this._onScroll);
    clearTimeout(this.timeout);
  }

  _onResize() {
    this._layout();
  }

  _layout() {
    if (this._mobileNavRef) {
      const rect = findDOMNode(this._mobileNavRef).getBoundingClientRect();
      this.setState({ mobileNavHeight: rect.height });
    }
  }

  _onScroll(event) {
    const elem = findDOMNode(this._mobileRef);
    const rect = elem.getBoundingClientRect();
    if (rect.top < 0) {
      this.setState({ mobileOffset: Math.abs(rect.top) / 12 });
    }
  }

  render() {
    const {
      mobileNavHeight, mobileOffset, navActive
    } = this.state;

    let articleStyle, footerStyle;
    if (!navActive) {
      articleStyle = { transform: `translateY(-${mobileNavHeight}px)` };
      footerStyle = { marginBottom: `-${mobileNavHeight}px` };
    }

    const mobileStyle = { backgroundPosition: `50% ${50 - mobileOffset}%` };

    const codePen = (
      <iframe height='400' scrolling='no' title='Hello World'
        src={'//codepen.io/grommet/embed/preview/gaEGPY/' +
          '?height=400&theme-id=light&default-tab=result&embed-version=2'}
        frameBorder='no' allowTransparency='true' allowFullScreen='true'
        style={{ width: '100%' }} />
    );



    const themes = THEMES.map((theme, index) => {
      let labelNode;
      if (theme.label) {
        labelNode = (
          <Heading tag='h4' align='center' strong={true} margin='none'>
            {theme.label}
          </Heading>
        );
      }
      return (
        <Tile key={theme.url} pad='large'>
          <Animate visible='scroll' keep={true}
            enter={{
              animation: 'slide-up', duration: 1000,
              delay: (100 + (200 * index))
            }}>
            <Button href={theme.url}>
              <Box direction='row' align='center' justify='center'
                responsive={false} pad={{ between: 'small' }}>
                <theme.Icon size={theme.size} colorIndex='plain' />
                {labelNode}
              </Box>
            </Button>
          </Animate>
        </Tile>
      );
    });

    return (
      <Article className='home' style={articleStyle}>

        {/* <HomeSection ref={(ref) => this._mobileNavRef = ref}
          className='home-mobile' colorIndex='brand'
          pad={{ vertical: 'large', between: 'small' }}
          style={{backgroundColor:'#07AEFF', color:'white'}} 
          >
          <GrommetLogo a11yTitle='Grommet Logo' invert={true} />
          <Menu primary={true} align='center'>
          
          </Menu>
        </HomeSection>

        <Header className='home-desktop' fixed={false} appCentered={true}
          pad={{ vertical: 'medium', between: 'medium' }} 
          style={{backgroundColor:'#07AEFF', color:'white'}}
          >
          <GrommetLogo a11yTitle='Grommet Logo' />
          <Menu direction='row' responsive={false}>
            
          </Menu>
        </Header> */}

        <HomeSection
          pad={{ vertical: 'medium' }} align='stretch'
          // basis='large'
          style={{ backgroundColor: '#07AEFF', color: 'white' }}
          full={true}
          // animate={true}
        >
          <Box primary={true} pad={{ vertical: 'large' }} direction='column'
            justify='center' align='center' flex='grow'>
            <Heading align='center' tag="h1" style={{ color: '#f5f5f5' }}  >通证云 </Heading>
            <Paragraph align='center' style={{ color: 'white' }}  >BINSTD（BINARY DIGIT STANDARD）零开发成本的，区块链云服务平台</Paragraph>
            <Button label='了解更多' align='center' style={{ color: '#f5f5f5', border: '2px solid #f5f5f5' }} href='http://doc.binstd.com/' primary={true} />

          </Box>
          <Footer appCentered={true} justify='center'>
            <Anchor style={{ color: '#f5f5f5' }} href='https://github.com/grommet/grommet'
              icon={<GithubIcon
                
                a11yTitle='Grommet Github' />} />
            <Anchor href='https://github.com/grommet/grommet'
              icon={<GithubIcon
                a11yTitle='Grommet Github' />} />
            <Anchor href='https://github.com/grommet/grommet'
              icon={<GithubIcon
                a11yTitle='Grommet Github' />} />
            <Anchor href='https://github.com/grommet/grommet'
              icon={<GithubIcon
                a11yTitle='Grommet Github' />} />
            {/* <Anchor href='http://slackin.grommet.io'
              icon={<SlackIcon colorIndex='plain'
              a11yTitle='Grommet Slack' />}/> */}
          </Footer>
        </HomeSection>

        <HomeSection animate={true}>
          <Box pad='large'>
            <ReactGrommetSketch />
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

            <Button style={{ color: '#07AEFF', border: '2px solid #07AEFF' }} path='/docs/start' label='点我开始' />
          </Box>
        </HomeSection>

        {/* <HomeSection animate={true}>
          <Heading tag='h2' strong={true}>暂时砍掉</Heading>
          <Paragraph align='center' margin='none'>
            暂时砍掉暂时砍掉暂时砍掉暂时砍掉
          </Paragraph>
          <Box pad='medium' size='large'>
            {codePen}
          </Box>
          <Footer pad='medium' justify='center' direction='column'>
            <Paragraph>
             查看详细查看详细.查看详细.查看详细.查看详细.查看详细.查看详细.....
            </Paragraph>
            <Button 
            style={{ color: '#07AEFF', border: '2px solid #07AEFF' }}
            path='/docs/components' 
            label='点击查看' />
          </Footer>
        </HomeSection> */}

        <HomeSection  animate={true}
        style={{ backgroundColor: '#07AEFF', color: 'white' }}
        >
          <Heading tag='h2' strong={true}>为什么选择我们?</Heading>
          <Paragraph 
            align='center'
            style={{ color: 'white' }}
          >
            我们为你提供零成本的：从传统互联网应用开发到面向区块链的开发的云服务。
          </Paragraph>
          <Tiles justify='center'
            pad={{ vertical: 'medium' }}>
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
            <WhyGrommetItem icon={<AccessibleIcon colorIndex='light-1'
              size='large' />}
              heading='安全&去中心化' href='https://vimeo.com/187068246'
              delay={700}>
              <Paragraph align='center' margin='none'
               style={{ color: 'white' }}
              >
                我们帮助您连接区块链网络，为您提供易用性，零成本的区块链迁移，但我们不作为您的服务端，您的服务端是您选择的区块链网络。
              </Paragraph>
            </WhyGrommetItem>
          </Tiles>
        </HomeSection>

        <HomeSection 
        align='stretch' animate={true}
        style={{ backgroundColor: '#07AEFF', color: 'white' }}
        >
          <Box pad='medium' align='center' style={{ overflow: 'hidden' }}>
            <Animate visible='scroll' keep={true}
              enter={{ animation: 'jiggle', duration: 2000, delay: 100 }}>
              <Hands />
            </Animate>
          </Box>
          <Box pad='medium' align='center'>
            <Heading tag='h3' strong={true}>与我们携手,壮大区块链生态</Heading>
            <Paragraph align='center' margin='none'
              style={{ color: 'white' }}
            >
             我们有开发者社群,文档翻译计划(已翻译多个业内有影响力的开发文档和知名项目白皮书)。
            </Paragraph>
            <Footer pad='medium' justify='center'>
              <Button 
              path='/' 
              style={{ color: '#f5f5f5', border: '2px solid #f5f5f5' }}
              label='申请加入' />
            </Footer>
          </Box>
        </HomeSection>

        <HomeSection colorIndex='light-2' animate={true}>
          <Heading tag='h2' align='center' strong={true}
          style={{ color: '#07AEFF' }}
          >
            binstd生态
          </Heading>
          <Paragraph 
          align='center' margin='none'
          style={{ color: '#07AEFF' }}
          >
           binstd通证云,帮助许多传统企业区块链化.我们也拥有多个合作伙伴：
          </Paragraph>
          <Tiles align='center' justify='center' responsive={false}
            pad='large'
            style={{ color: '#07AEFF' }}
            >
            {themes}
          </Tiles>
        </HomeSection>

        {/* <HomeSection ref={(ref) => this._mobileRef = ref}
          backgroundImage={'url(/img/mobile_first.png)'} justify='start'
          style={mobileStyle} animate={true}>
          <Box className='home__mobile' align='center'>
            <Heading tag='h2' align='center' strong={true}>
              What will you create
            </Heading>
            <Paragraph align='center'>
              Grommet is used by a variety of companies.
              Check out some examples that we think you’ll love.
            </Paragraph>
            <Button path='/docs/showcase' label='Showcase' />
          </Box>
        </HomeSection> */}

        <Animate visible='scroll' keep={true}
          enter={{ animation: 'fade', duration: 1000, delay: 100 }}>
          <Footer align='stretch' primary={true} direction='column'
            colorIndex='grey-1' style={footerStyle}>
            <Box direction='row' justify='between' pad='medium'>
              <Box direction='row' align='center' pad={{ between: 'medium' }}
                responsive={false}>
                {/* <GrommetLogo /> */}
                <Image 
                src='https://blockluz-1253389096.cos.ap-beijing.myqcloud.com/blockman/Icon500.png'
                style={{height:50,width:50}}
                />
                <Anchor href='tags/blog'>官方Blog</Anchor>
                <Anchor href='https://github.com/binstd'>github</Anchor>
                <Anchor path='https://www.proginn.com/'>程序员客栈</Anchor>
                <Anchor href='#'>关于</Anchor>
              </Box>
              <Box direction='row' responsive={false}
                pad={{ vertical: 'small' }}>
                 <Anchor href='https://github.com/binstd'
                icon={<GithubIcon
                  a11yTitle='Grommet Github' />} />
                <Anchor href='#'
                  icon={<TwitterIcon a11yTitle='Grommet Twitter' />} />
                <Anchor href='#'
                  icon={<FacebookIcon a11yTitle='Grommet Facebook' />} />
              </Box>
            </Box>
            <Box direction='row'
              pad={{ horizontal: 'medium', vertical: 'large' }}>
              <span>
                 <Anchor
                  href='binstd.com'>
                  BinSTD官方
                </Anchor>
              </span>
              <span>
                ©  2018 BinSTD All Rights Reserved.2016
              </span>
            </Box>
          </Footer>
        </Animate>

      </Article>
    );
  }

};
