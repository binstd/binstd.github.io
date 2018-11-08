import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Header from '../../components/Header';
import Foot from '../../components/Foot';
import '../../mybulma.sass'
import styled from 'styled-components'
import { server_url } from '../../lib/config';
import { observer } from 'mobx-react';
import { Link } from 'gatsby-link'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'



const Documentation = styled.main`
  float: left;
  width: 80%;
  margin-left: 10%;
  padding: 1em 1em;

  @media ${props => props.theme.mobile} {
    width: 100%;
    margin: 0;
  }
`

const DocContents = styled.div`
  /**
   * Code 💻
   */
  code {
    background: #f4f7fb;
    padding: 0 0.25em;
    font-size: 0.95em;
    border-radius: 3px;
    font-family: ${props => props.theme.monspace};
  }

  .gatsby-highlight pre {
    background: #f9fbfd;
    border: 1px solid #ececec;
    border-radius: 3px;
    padding: 0.5em 1em;
    overflow: auto;
    margin: 0 0 1em 0;
  }

  .gatsby-highlight code {
    background: none;
    color: inherit;
    padding: 0;
    border-radius: 0;
  }

  /**
   * Tables 
   */
  table {
    border: 1px solid #ececec;
    overflow: hidden;
    border-collapse: separate;
    border-spacing: 0;
    width: 100%;
    margin: 1em 0;
    border-radius: 3px;
  }

  th {
    font-weight: 600;
  }

  h3 {
    margin: 0.5em 0;
  }

  th:empty {
    display: none;
  }

  td,
  th {
    text-align: left;
    padding: 0.375em 0.75em 0.375em 0.75em;
  }

  td {
    line-height: 1.75em;
    vertical-align: top;
  }

  .bordered-table table {
    border-width: 0 1px 1px 0;
  }

  .bordered-table td,
  .bordered-table th {
    border: 1px solid #ececec;
    border-right: 0;
    border-bottom-width: 0;
  }

  .fixed-table table {
    table-layout: fixed;
  }

  .attributes-table td {
    line-height: 1.5em;
  }

  .attributes-table td:first-child {
    text-align: right;
    line-height: 1em;
  }

  .attributes-table strong {
    white-space: nowrap;
  }

  small {
    color: #888;
    display: block;
    margin-top: 0.25em;
    font-size: 0.875em;
    font-weight: 400;
    line-height: 1em;
  }

  img {
    display: block;
    margin: 2rem auto;
    max-width: 600px;
    width: 98%;
  }
`
//   padding: 0 0 0.25em 0;
const DocHeader = styled.header`

  margin-bottom: 0.2em;
  border-bottom: 2px solid #f0f0f0;

  h1 {
    margin-top: 0;
    margin-bottom: 0.5em;
  }
`

const Article = observer(class Article extends Component {

    constructor() {
        super();
        this.state = {
            loading: false,
            data: {},
        };
    }
  
    componentDidMount() {
        console.log('/dapp/manage:',this.props.match.params.id);
        
        // https://api.binstd.com/api/spiders/2
        fetch(`${server_url}/api/spiders/${this.props.match.params.id}`).then(res => res.json()).then(data => {
            console.log(data);
            this.setState({
                data
            });
        }).catch(function (e) {
            console.log("失败");
        });
    }

    render() {
        let {title,content} = this.state.data;
        return (
             <Box>
                <Header />
                    <section className="container max-width">
                        <div 
                            className="section is-center"
                        >
                            {/* {this.props.match.params.id} */}
                            {/* <h4 className="title is-4">{title}</h4>
                            <div dangerouslySetInnerHTML={{
                                __html: content
                            }}/> */}
                               <Documentation>
                                    <DocHeader>
                                        < h1 className="title is-4">{title}</h1>
                                    </DocHeader>
                                    <DocContents dangerouslySetInnerHTML={{ __html: content }} />
                                </Documentation>
                        </div>
                    </section>  
                    <Foot style="" />   
            </Box>     
        )

    }
});

export default Article
