import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Section from 'grommet/components/Section';

import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
// import Blogs from './Blogs';

// import Section from 'grommet/components/Section';
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
 class InfographicSection extends Component {
	render() {
	const {  children, ...props } = this.props;
	  return (
		<Section {...props} className={this.props.className}
		  appCentered={true} justify="center" align="center" full={true}
		  pad={{vertical: "large"}}>
		  {children}
		</Section>
	  );
	}
  };
  
  export default class NarraTive extends Component {
    render() {
   
      return (
        <Article ref="article" className="home" 
          scrollStep={false} controls={false}>
			<Box style={{textAlign:'center', zIndex:300}}>
				For demonstration purposes only.
			</Box>

			<InfographicSection 
				className="infographic__section infographic__section--1" 
          		colorIndex="light-1">

          	<Tabs responsive={false} justify="center">

            <Tab title="Larger Cohort">
              <Box className="infographic__slide" full="horizontal">
                {/* <ChartHeader text="The Millennial generation, age 15-35 in 2015, is the largest
                  in US history." /> */}
                {/* <LargerCohert layout={this.props.layout} /> */}
                {/* <Source text="Prosper Insights & Analytics for the Media Behavior
                 and Influence Study" /> */}
              </Box>
            </Tab>

            <Tab title="First Digital Natives">
              <Box className="infographic__slide" full="horizontal">
                {/* <ChartHeader text="Millennials turn to online activities for fun and 
                  entertainment." /> */}
                {/* <FirstDigitalNatives layout={this.props.layout} /> */}
                {/* <Source text="Prosper Insights & Analytics for the Media Behavior
                  and Influence Study" /> */}
              </Box>
            </Tab>

            <Tab title="Social and Connected">
              <Box className="infographic__slide">
                {/* <ChartHeader text="More Millennials use technology to communicate about 
                  products services and brands." /> */}
                <SocialAndConnected />
                {/* <Source text="Prosper Insights & Analytics for the Media Behavior
                  and Influence Study" /> */}
              </Box>
            </Tab>

            <Tab title="Less Money to Spend">
              <Box className="infographic__slide">
                {/* <ChartHeader text="Mean income for 15–24 year olds as a % of total population" /> */}
                {/* <LessMoneyToSpend layout={this.props.layout} /> */}
                {/* <Source text="Bureau of Labor Statistics" /> */}
              </Box>
            </Tab>
          </Tabs>
        </InfographicSection>

        <Title2 />

        <InfographicSection className="infographic__section infographic__section--2" 
          colorIndex="light-2">
          <Tabs responsive={false} justify="center">

            <Tab title="Beyond the Brand">
              <Box className="infographic__slide">
                {/* <ChartHeader text={`“When I shop, I always try to buy branded products.”`} /> */}
                {/* <BeyondTheBrand layout={this.props.layout} /> */}
                {/* <Source text="US Census Bureau" /> */}
              </Box>
            </Tab>

            <Tab title="Clicking to Buy">
              <Box className="infographic__slide">
                {/* <ChartHeader text="% of respondents who purchased something online in the 
                  last 12 months." /> */}
                {/* <ClickingToBuy layout={this.props.layout} /> */}
                {/* <Source text="Office for National Statistics, United Kingdom" /> */}
              </Box>
            </Tab>

            <Tab title="Searching for Value">
              <Box className="infographic__slide">
                {/* <ChartHeader text="Price and Quality create brand loyalty among Millennials 
                  more than other generations." /> */}
                {/* <SearchingForValue layout={this.props.layout} /> */}
                {/* <Source text="AIMIA Inc. Born this Way: US 
                  Millennial Loyalty Survey ©2012" /> */}
              </Box>
            </Tab>
          </Tabs>
        </InfographicSection>

        <Title3 />

        <InfographicSection className="infographic__section infographic__section--3" 
          colorIndex="light-1">
          <Tabs responsive={false} justify="center">
            <Tab title="The Renter Generation">
              <Box className="infographic__slide">
                {/* <ChartHeader text="A growing number of older millennials are choosing to 
                  rent, not buy." /> */}
                {/* <RenterGeneration /> */}
                {/* <Source text="US Census Bureau" /> */}
              </Box>
            </Tab>
            <Tab title="Changing Ownership">
              <Box className="infographic__slide">
                {/* <ChartHeader text="Renters as a % of total population, 25-34 years" /> */}
                {/* <ChangingOwnership layout={this.props.layout} /> */}
                {/* <Source text="Organization for Economic Co-operation and Development" /> */}
              </Box>
            </Tab>
          </Tabs>
        </InfographicSection>
        </Article>
      );
    }
  };