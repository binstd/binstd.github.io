import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import App from 'grommet/components/App';
// import Header from '../components/header'
import Header from 'grommet/components/Header';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
 import Menu from 'grommet/components/Menu';
 import Title from 'grommet/components/Title';
 
// import Actions from 'grommet/components/Actions';
// import './grommet-hpe.min.css'
import './grommet.min.css'


const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />

   
    {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
    <App>
    <Header float={false}
      fixed={true}>
      {/* <Title>
        Sample Title
  	</Title> */}
      <Box flex={true}
        direction='row'
        responsive={false}>
		<Menu responsive={false}
			inline={true}
			direction='row'
			>
			<Anchor href='#'
				className='active'>
				区块链
			</Anchor>
			<Anchor href='#' className='active'>
				react
			</Anchor>
			<Anchor href='#' className='active' >
				资源
			</Anchor>
			</Menu>
        {/* <Search inline={true}
          fill={true}
          size='medium'
          placeHolder='Search'
          dropAlign={{ "right": "right" }} /> */}

       
      </Box>
    </Header>
    {children()}
    </App>
  
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
