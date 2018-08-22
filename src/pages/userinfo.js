import React, { Component } from 'react';

import Box from 'grommet/components/Box';
// import PostLink from "../components/post-link";
import Header from '../components/Header';
import Value from 'grommet/components/Value';

import Section from 'grommet/components/Section';
import Article from 'grommet/components/Article';
import Foot from '../components/Foot';

import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
import Paragraph from 'grommet/components/Paragraph';

import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import Button from 'grommet/components/Button';

import Footer from 'grommet/components/Footer';
import Columns from 'grommet/components/Columns';

import Link from "gatsby-link";

import Title from 'grommet/components/Title';
import Label from 'grommet/components/Label';

import jwtDecode from 'jwt-decode';
import user_model from '../model/user_model';
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
        };
      
    }

    componentWillMount() {
        let auth = '';
        if (localStorage.getItem("userinfo")) {
            let userinfo = JSON.parse(localStorage.getItem("userinfo"));
            auth = userinfo.auth.accessToken;
            this.setState({ auth});
            console.log('\n auth: ',auth);
        }
        const { payload: { id } } = jwtDecode(auth);
        fetch(`${server_url}/users/${id}`, {
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
    
    handleChange = ({ target: { value } }) => {
        this.setState({ username: value });
    };
    
    handleSubmit = ({ target }) => {
        console.log(this.state.user);
        const { auth, user, username } = this.state;
        this.setState({ loading: true });
        fetch(`${server_url}/users/${user.id}`, {
            body: JSON.stringify({ username }),
            headers: {
            Authorization: `Bearer ${auth}`,
            'Content-Type': 'application/json'
            },
            method: 'PATCH'
        })
            .then(response => response.json())
            .then(user => this.setState({ loading: false, user }))
            .catch(err => {
            window.alert(err);
            this.setState({ loading: false });
            });
    };
    render() {
        const { auth, loading, user } = this.state;
        // const username = user && user.username;
        const { payload: { publicAddress } } = jwtDecode(auth);
          const username = user && user.username;
        // console.log('id:',id);
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
                            {/* </Box>  */}
                       
                    </AccordionPanel>
                  
                        <AccordionPanel heading='我的公钥'>
                            <Paragraph>
                            <Label>  {publicAddress} </Label>
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
