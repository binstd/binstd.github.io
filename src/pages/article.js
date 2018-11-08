import React, { Component } from 'react';
import '../mybulma.sass'

// import jwtDecode from 'jwt-decode';

import Box from 'grommet/components/Box';

// import { observer } from 'mobx-react';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import ArticleList from '../components/article/list';
import Article from '../components/article/content';

const ArticlePage = class DappPage extends Component {
    render() { 
        return ( 
            <Box>
                
                <Route exact path="/article/" component={ArticleList} />
                {/* <Route path="/dapp/" component={DappList} /> */}
                <Route path="/article/:id/" component={Article} />   
                   
            </Box>     
        ) 
    }
};

export default ArticlePage