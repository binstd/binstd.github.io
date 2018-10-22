import React, { Component } from 'react';

import Footer from 'grommet/components/Footer';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Animate from 'grommet/components/Animate';
import GithubIcon from 'grommet/components/icons/base/SocialGithub';

import AccessibleIcon from
    'grommet/components/icons/base/Accessible';

import Image from 'grommet/components/Image';

export default class Foot extends Component {
    constructor () {
        super();
        this._onResize = this._onResize.bind(this);
        this.state = {
            mobileNavHeight: 0, mobileOffset: 0, navActive: false
        }; 
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

    render() {
        const {
            mobileNavHeight, mobileOffset, navActive
        } = this.state;

        let articleStyle, footerStyle;
        if (!navActive) {
            articleStyle = { transform: `translateY(-${mobileNavHeight}px)` };
            footerStyle = { marginBottom: `-${mobileNavHeight}px` };
        }
        return (
            <Animate
                visible='scroll'
                keep={true}
                enter={{ animation: 'fade', duration: 1000, delay: 100 }}
            >
                <Footer align='stretch' primary={true} direction='column'
                    colorIndex='grey-1'
                >
                    <Box direction='row' justify='between' pad='medium'>
                        <Box direction='row' align='center' pad={{ between: 'medium' }}
                            responsive={false}>
                            {/* <GrommetLogo /> */}
                            <Image
                                src='https://programmerinnfile.b0.upaiyun.com/community/10001/20180814/69sDk199wJ.png'
                                style={{ height: 50, width: 50 }}
                            />
                           
                            <Anchor href='https://github.com/binstd' target="_blank" >GitHub</Anchor>
                            <Anchor href='https://www.proginn.com/' target="_blank" >程序员客栈</Anchor>
                            <Anchor href='/info'>关于我们</Anchor>
                        </Box>
                        <Box direction='row' responsive={false}
                            pad={{ vertical: 'small' }}>
                            <Anchor
                                target="_blank"
                                href='https://github.com/binstd'
                                icon={<GithubIcon
                                    a11yTitle='Grommet Github' />} />
                        </Box>
                    </Box>
                    <Box direction='row'
                        pad={{ horizontal: 'medium', vertical: 'large' }}>

                        <span>
                           BinSTD进制 © 2018 All Rights Reserved.
                        </span>
                    </Box>
                </Footer>
            </Animate>
        );
    }
};