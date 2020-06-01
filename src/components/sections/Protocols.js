import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import { ReactComponent as MakerDAOLogo } from '@static/logos/makerdao.svg';
import { ReactComponent as CompoundLogo } from '@static/logos/compound.svg';
import { ReactComponent as UniswapLogo } from '@static/logos/uniswap.svg';
import { ReactComponent as PoolTogetherLogo } from '@static/logos/pool-together.svg';

const LOGOS = [
  {
    logo: MakerDAOLogo,
    link: 'https://makerdao.com/',
  },
  {
    logo: CompoundLogo,
    link: 'https://compound.finance/',
  },
  {
    logo: UniswapLogo,
    link: 'https://uniswap.org/',
  },
  {
    logo: PoolTogetherLogo,
    link: 'https://www.pooltogether.com/',
  },
];

const Protocols = () => (
  <StaticQuery
    query={graphql`
      query {
        art_story: file(relativePath: { eq: "tell_story.png" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="protocols" accent>
        <StyledContainer>
          <div>
            <h1>Supported Protocols</h1>
            <LogoGrid>
              {LOGOS.map(({ logo, link }) => (
                <ExternalLink href={link}>{logo()}</ExternalLink>
              ))}
            </LogoGrid>
          </div>
          <Art>
            <Img fluid={data.art_story.childImageSharp.fluid} />
          </Art>
        </StyledContainer>
      </Section>
    )}
  />
);

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 64px;
  justify-items: center;
  margin-top: 96px;

  a {
    svg {
      width: 100%;
    }
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
  position: relative;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-content: center;
  }
`;

const Art = styled.figure`
  width: 600px;
  position: absolute;
  top: -12%;
  right: 50%;

  @media (max-width: ${props => props.theme.screen.lg}) {
    top: 0;
    right: 65%;
    width: 500px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    display: none;
  }
`;

export default Protocols;
