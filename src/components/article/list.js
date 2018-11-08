import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Header from '../../components/Header';
import Foot from '../../components/Foot';
import '../../mybulma.sass'

import { server_url } from '../../lib/config';
import { observer } from 'mobx-react';
import { Link } from 'gatsby-link'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

const ArticleList = observer(class ArticleList extends Component {

    constructor() {
        super();
        this.state = {
            loading: false,
            data: [],
            page: 0
        };
    }
  
    componentDidMount() {
        this.moredata();
        // let start = this.state.page * 10; 
        // let end = this.state.page*10 +10;   
        // let filter  = {}
        // let param = {
        //     // filter: {"tags":"eth"}
        //     range: JSON.stringify([start,end]),
        //     sort: JSON.stringify(["id","ASC"])
        // };
        // let paramUrl = '';
        // if (param) {
        //     let paramsArray = [];
        //     //拼接参数
        //     Object.keys(param).forEach(key => paramsArray.push(key + '=' + param[key]))
        //     paramUrl += '&' + paramsArray.join('&')
        // }   
        
        // fetch(`${server_url}/api/spiders?filter=${JSON.stringify(filter)}${paramUrl}`).then(res => res.json()).then(data => {
        //     console.log(data);
        //     this.setState({
        //         data
        //     });
        // }).catch(function (e) {
        //     console.log("失败");
        // });
    }

    moredata() {
        //获取当前page
        let { page, data } = this.state;
        let start = page * 10; 
        let end = page * 10 + 10;   
        let filter  = {}
        let param = {
            // filter: {"tags":"eth"}
            range: JSON.stringify([start,end]),
            sort: JSON.stringify(["id","ASC"])
        };
        let paramUrl = '';
        if (param) {
            let paramsArray = [];
            //拼接参数
            Object.keys(param).forEach(key => paramsArray.push(key + '=' + param[key]))
            paramUrl += '&' + paramsArray.join('&')
        }   
        console.log(paramUrl);
        fetch(`${server_url}/api/spiders?filter=${JSON.stringify(filter)}${paramUrl}`).then(res => res.json()).then(result => {
            // console.log(data);
            data = data.concat(result);
            page ++;
            console.log(data);
            this.setState({
                data,
                page
            });
        }).catch(function (e) {
            console.log("失败");
        });
    }

    render() {
        let {data} = this.state;
        return (
             <Box>
                <Header />
                    <section className="container max-width">
                        <div 
                            className="section is-center "
                        >
                            <div>
                            {data.map((item ) => (
                                    <div
                                        className="content "
                                        key={item.id}
                                    >
                                        <p>
                                        
                                        {/* {'https://ropsten.etherscan.io/tx/'+data.hash} */}
                                            <a className="has-text-grey-darker title is-5" href={'/article/'+item.id+'/' }>
                                                {item.title}
                                            </a>
                                        </p>

                                        <p>
                                            <a className="has-text-grey " href={'/article/'+item.id+'/'} >
                                                {item.description}
                                            </a>
                                            <br />
                                            <br />
                                        </p>
                                    </div>
                                ))}  
                                <div  className="content has-text-centered">
                                    <a className="button is-white "  onClick={() => this.moredata()} > 加载更多 </a> 
                                </div>
                            </div>

                        </div>
                    </section>  
                    <Foot style="" />   
            </Box>     
        )

    }
});

export default ArticleList
