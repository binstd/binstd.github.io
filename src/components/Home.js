// (C) Copyright 2014-2017 Hewlett Packard Enterprise Development LP
import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import Article from 'grommet/components/Article';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Footer from 'grommet/components/Footer';
import Section from 'grommet/components/Section';
import Paragraph from 'grommet/components/Paragraph';

import Anchor from 'grommet/components/Anchor';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Animate from 'grommet/components/Animate';

import GithubIcon from 'grommet/components/icons/base/SocialGithub';

import AccessibleIcon from
    'grommet/components/icons/base/Accessible';

import GrommetIcon from 'grommet/components/icons/base/BrandGrommetOutline';
import ArubaIcon from 'grommet/components/icons/base/PlatformAruba';
import DXCIcon from 'grommet/components/icons/base/PlatformDxc';
import HPEIcon from 'grommet/components/icons/base/BrandHpeStack';
import HPIcon from 'grommet/components/icons/base/PlatformHpi';

import ResourcesIcon from 'grommet/components/icons/base/Resources';
import ConfigureIcon from 'grommet/components/icons/base/Configure';
import RunIcon from 'grommet/components/icons/base/Run';

import Image from 'grommet/components/Image';
// import Contents from './docs/Contents';
import Hands from './img/Hands.js';


import WhyMe from './homepage/WhyMe';
import HomeHeader from './homepage/HomeHeader';
import CanDo from './homepage/CanDo';
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

        if (document) {
            document.title = 'Grommet';
        }
        this._layout();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this._onResize);
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

        return (
            <Article
                className='home' style={articleStyle}
            >

                <HomeSection
                    pad={{ vertical: 'medium' }} align='stretch'
                // basis='large'
                // style={{ backgroundColor: '#07AEFF', color: '#07AEFF' }}
                // full={true}
                // animate={true}
                >
                    <HomeHeader />

                </HomeSection>


                <HomeSection animate={true}
                    style={{ backgroundColor: '#07AEFF', color: 'white' }}
                //  full={true}
                // align='center'
                >
                    <WhyMe />
                </HomeSection>

                <HomeSection animate={true}>
                    <CanDo />
                </HomeSection>

                <HomeSection
                    align='stretch' 
                    animate={true}
                    style={{ backgroundColor: '#07AEFF', color: 'white' }}
                >
                    <Box pad='medium' align='center' style={{ overflow: 'hidden' }}>
                        <Animate
                            className='home-desktop'
                            visible='scroll'
                            keep={true}
                            enter={{ animation: 'jiggle', duration: 2000, delay: 100 }}>
                            <Hands />
                        </Animate>
                    </Box>

                    <Box pad='medium' align='center'>
                        <Heading tag='h3' strong={true}>与我们携手,壮大区块链生态</Heading>
                        <Paragraph 
                            align='center' 
                            margin='none'
                            style={{ color: 'white' }}
                        >
                            我们有开发者社群,文档翻译计划(已翻译多个业内有影响力的开发文档和知名项目白皮书)。
                        </Paragraph>
                        <Footer 
                            pad='medium' 
                            justify='center'
                        >
                        <Button
                            path='/'
                            style={{ color: '#f5f5f5', border: '2px solid #f5f5f5' }}
                            label='申请加入' />
                        </Footer>
                    </Box>

                </HomeSection>

                <HomeSection colorIndex='light-2' animate={true}>
                    <Heading 
                        tag='h2'
                        align='center' 
                        strong={true}
                        style={{ color: '#07AEFF' }}
                    >
                        binstd生态
                    </Heading>

                    <Box pad='medium' >
                        <Paragraph
                            // pad='large'
                            align='center' 
                            // margin='none'
                            style={{ color: '#07AEFF' }}
                        >
                            binstd通证云,帮助许多传统企业区块链化.我们也拥有多个合作伙伴：
                        </Paragraph>

                    </Box>
                    <Tiles align='center' justify='center' responsive={false}
                        pad='large'
                        style={{ color: '#07AEFF' }}
                    >
                        {themes}
                    </Tiles>
                </HomeSection>

                {
                /* <HomeSection ref={(ref) => this._mobileRef = ref}
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
                </HomeSection> */
                }

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
                                    style={{ height: 50, width: 50 }}
                                />
                                <Anchor path='tags/blog'>官方Blog</Anchor>
                                <Anchor href='https://github.com/binstd' target="_blank" >github</Anchor>
                                <Anchor href='https://www.proginn.com/' target="_blank" >程序员客栈</Anchor>
                                <Anchor href='/info'>关于</Anchor>
                            </Box>
                            <Box direction='row' responsive={false}
                                pad={{ vertical: 'small' }}>
                                <Anchor target="_blank" href='https://github.com/binstd'
                                    icon={<GithubIcon
                                        a11yTitle='Grommet Github' />} />
                                {/* <Anchor href='#'
                  icon={<TwitterIcon a11yTitle='Grommet Twitter' />} />
                <Anchor href='#'
                  icon={<FacebookIcon a11yTitle='Grommet Facebook' />} /> */}
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
                                ©  2018 BinSTD All Rights Reserved.
              </span>
                        </Box>
                    </Footer>
                </Animate>

            </Article>
        );
    }

};
