import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import Helmet from 'react-helmet';
import Header from '../components/Header';
import Highlight from '../components/docs/Highlight';
import Link from '../components/docs/Link';
import CTA from '../components/docs/CTA';
import Button from '../components/docs/Button';
import Subheading from '../components/docs/Subheading';

import tocEntries from '../lib/tocEntries';
import Foot from '../components/Foot';

import {
  color,
  formatting,
  typography,
  pageMargins,
  breakpoint,
} from '../components/docs/shared/styles';

const Heading = styled(Subheading)`
  display: block;
  font-size: ${typography.size.s1}px;
  line-height: 1rem;
  color: ${color.medium};

  margin-bottom: 0.5rem;
  @media (min-width: ${breakpoint * 1}px) {
    margin-bottom: 1rem;
  }
`;

const DocsItem = styled.li`
  a.selected {
    font-weight: ${typography.weight.extrabold};
  }
`;

const DocsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
`;

const Sidebar = styled.div`
  flex: 0 1 240px;
  padding-right: 20px;

  @media (max-width: ${breakpoint - 1}px) {
    flex: none;
    margin: 1rem 0 2rem;
    width: 100%;
    border-bottom: 1px solid ${color.mediumlight};
  }

  ${DocsList} {
    list-style: none;
    padding: 0;
    margin: 0 0 0 0;
    position: relative;

    @media screen and (min-width: ${breakpoint}px) {
      margin: 0 0 2rem 24px;
      &:after {
        position: absolute;
        top: 12px;
        right: auto;
        bottom: 12px;
        left: -20px;
        width: auto;
        height: auto;
        border-left: 1px solid ${color.light};
        content: '';
        z-index: 0;
      }
    }

    @media (max-width: ${breakpoint - 1}px) {
      margin-bottom: 1rem;

      li {
        display: inline-block;
        margin-right: 15px;
      }
    }

    a {
      line-height: 1rem;
      padding: 8px 0;
      line-height: 1.5;
      position: relative;
      z-index: 1;

      @media screen and (min-width: ${breakpoint}px) {
        &:after {
          position: absolute;
          top: 15px;
          right: auto;
          bottom: auto;
          left: -23px;
          width: auto;
          height: auto;
          background: ${color.mediumlight};
          box-shadow: white 0 0 0 4px;
          height: 8px;
          width: 8px;
          border-radius: 1em;
          text-decoration: none !important;
          content: '';
        }

        &.selected:after {
          background: ${color.primary};
        }
      }
    }
  }
`;

const Markdown = styled.div`
  margin-bottom: 3rem;
`;

const Content = styled.div`
  ${formatting};
  flex: 1;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;

  ${'' /* Allows Flexbox to overflow  */};
  min-width: 0;
`;

const DocsWrapper = styled.div`
  ${pageMargins};
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${breakpoint}px) {
    flex-direction: row;
    padding-top: 1rem;
    padding-bottom: 3rem;
  }
`;

const NextChapterSubtitle = styled.div`
  display: block;
  margin-top: 0.5rem;
  font-size: 18px;
  line-height: 1.65;
  font-weight: ${typography.weight.regular};
`;

const GithubLink = styled(Link)`
  font-weight: ${typography.weight.bold};
`;
const GithubLinkWrapper = styled.div`
  margin-top: 3rem;
  text-align: center;
`;

const CTAMessage = styled.div`
  overflow: hidden;
`;

const CTAWrapper = styled.a`
  font-weight: ${typography.weight.extrabold};
  font-size: ${typography.size.s3}px;
  @media screen and (min-width: ${breakpoint}px) {
    font-size: ${typography.size.m1}px;
  }
  line-height: 1.2;

  background: ${color.app};
  color: ${color.dark};
  border-radius: 4px;
  padding: 30px 20px;
  margin-bottom: 1rem;
  display: block;
  transition: all 150ms ease-out;
  text-decoration: none;
  overflow: hidden;

  display: flex;
  align-items: center;



  ${CTAMessage} {
    flex: 1;
  }

  svg {
    flex: 0 1 40px;
    height: 40px;
    margin-left: 10px;
    margin-right: 30px;
  }
`;

const Pagination = styled(CTA)`
  margin-top: 3rem;
`;

export default ({
  data: {
    currentPage,
    pages,
    site: { siteMetadata: { title: siteTitle, toc, languages, githubUrl, codeGithubUrl, siteUrl } },
  },
  location,
}) => {
  const entries = tocEntries(toc, pages);
  const {
    frontmatter: { commit, title, description },
    fields: { slug, chapter, framework, language },
  } = currentPage;

  const githubFileUrl = `${githubUrl}/blob/master/content${slug.replace(/\/$/, '')}.md`;

  const nextEntry = entries[toc.indexOf(chapter) + 1];

  const otherLanguages = languages.filter(l => l !== language);

  return (
    <div>
    <Header />
    <DocsWrapper>
      <Sidebar>
        {/* <Heading>Table of Contents</Heading> */}
        <DocsList>
          {entries.map(entry => (
            <DocsItem key={entry.slug}>
              <Link
                isGatsby
                strict
                className={slug === entry.slug ? 'selected': 'tertiary'}
                to={entry.slug}
              >
                {entry.title}
              </Link>
            </DocsItem>
          ))}
        </DocsList>
      </Sidebar>
    
      <Content>
      {/* <Heading tag="h1">{title}</Heading> */}
        <Markdown>
            <Highlight>{currentPage.html}</Highlight>
        </Markdown>

        {nextEntry && (
          <Pagination
            text={
              <div>
                {nextEntry.title}
                <NextChapterSubtitle>{nextEntry.description}</NextChapterSubtitle>
              </div>
            }
            action={
              <Link isGatsby to={nextEntry.slug}>
                <Button primary>查看下一个</Button>
              </Link>
            }
          />
        )}
        {/* <GithubLinkWrapper>
          <GithubLink className="secondary" href={githubFileUrl} target="_blank">
            <span role="img" aria-label="write">
              ✍️
            </span>{' '}
                Edit on GitHub
          </GithubLink>
        </GithubLinkWrapper> */}
      </Content>
    </DocsWrapper>
    <Foot style="" />
    </div>
  );
};

export const query = graphql`
  query PageQuery($framework: String!, $language: String!, $slug: String!) {
    currentPage: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        commit
      }
      fields {
        slug
        chapter
        framework
        language
      }
    }
    site {
      siteMetadata {
        title
        toc
        languages
        githubUrl
        codeGithubUrl
        siteUrl
      }
    }
    pages: allMarkdownRemark(
      filter: { fields: { framework: { eq: $framework }, language: { eq: $language } } }
    ) {
      edges {
        node {
          frontmatter {
            tocTitle
            title
            description
          }
          fields {
            slug
            chapter
          }
        }
      }
    }
  }
`;
