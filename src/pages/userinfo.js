import React, { Component } from 'react';

import Box from 'grommet/components/Box';


import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
import Paragraph from 'grommet/components/Paragraph';

import TextInput from 'grommet/components/TextInput';
import Button from 'grommet/components/Button';
import Label from 'grommet/components/Label';
import Header from '../components/Header';
import Foot from '../components/Foot';
import { observer } from 'mobx-react';
import { server_url } from '../lib/config';

const UserinfoPage = observer(class UserinfoPage extends Component {

    constructor() {
        super();
        this.state = {
            loading: false,
            user: null,
            username: '',
            auth:'',
            uid:'',
            address:''
        };
    }

    componentDidMount() {
        let auth,uid = '';
        if (localStorage.getItem("userinfo")) {
            let userinfo = JSON.parse(localStorage.getItem("userinfo"));
            auth = userinfo.auth.accessToken;
            uid = userinfo.id;
            this.setState({ 
                auth,
                address:userinfo.address,
                uid
            });
          
            console.log('\n auth: ',auth);
        }
    
        fetch(`${server_url}/api/users/${uid}`, {
          headers: {
            Authorization: `Bearer ${auth}`
          }
        })
        .then(response => response.json())
        .then(user => {
            this.setState({ user });
            console.log(user);
        }).catch(window.alert);
        
    }

    //  decodeToken(token){
    //     var playload  = {};
    //     if(token != null){
    //         const windowGlobal = typeof window !== 'undefined' && window;
    //         playload = JSON.parse($windowGlobal.atob(token.split('.')[1]));
    //     }
    //     return playload;
    // };

    handleChange = ({ target: { value } }) => {
        this.setState({ username: value });
    };
    
    handleSubmit = ({ target }) => {
        console.log(this.state.user);
        const { auth, user, username } = this.state;
        this.setState({ loading: true });
        fetch(`${server_url}/api/users/${user.id}`, {
            body: JSON.stringify({ username }),
            headers: {
                Authorization: `Bearer ${auth}`,
                'Content-Type': 'application/json'
            },
            method: 'PATCH'
        }).then(response => response.json())
        .then(user => this.setState({ loading: false, user }))
        .catch(err => {
            window.alert(err);
            this.setState({ loading: false });
        });
    };

    render() {
        const { auth, loading, user,address } = this.state;
        const username = user && user.username;
        if(username){
            console.log('username:',username);
        }

        return (
            <div>
                <Header />
                <Box 
                    className=""
                    justify='between'
                    // align='center'
                    wrap={false}
                    reverse={false}
                    pad='large'
                    margin='large'
                    // colorIndex='accent-1'
                >
                    <Accordion openMulti={true} > 
                        <AccordionPanel heading='名称 '>
                            <Label>
                                {username ? <pre>{username}</pre> : <pre>'未设置'</pre>}
                                </Label>
                                <pre>  
                                    <TextInput 
                                        // name='item-1'
                                        onDOMChange={this.handleChange}
                                    />
                                </pre>
                                <pre>  
                                    <Button 
                                        // icon={<Edit />}
                                            // accent={false}
                                        primary={true} 
                                        label='确认'
                                        onClick={this.handleSubmit}
                                        href='#'
                                    />       
                             </pre>
                            
                        </AccordionPanel>
                  
                        <AccordionPanel heading='我的公钥'>
                            <Paragraph>
                            <Label>  {address} </Label>
                            </Paragraph>
                        </AccordionPanel>
                        
                        <AccordionPanel heading='我的API-key'>
                        {/* <p></p> */}
                            {/* <Label>   </Label> */}
                            <Paragraph >
                                {auth.toString()}
                            </Paragraph>
                        </AccordionPanel>
                    </Accordion>         
                </Box>
                <Foot style="" />
            </div>
        )
    }
});

export default UserinfoPage
