import React from 'react';
// import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import { ReactComponent as EtherIcon } from '@static/icons/ether.svg';
import { ReactComponent as DaiIcon } from '@static/icons/dai.svg';
import { ReactComponent as CompoundIcon } from '@static/icons/compound.svg';
import { ReactComponent as PoolTogetherIcon } from '@static/icons/pooltogether.svg';
import { ReactComponent as UniswapIcon } from '@static/icons/uniswap.svg';

import { ReactComponent as AppStoreBadge } from '@static/badge/appstore.svg';
import { ReactComponent as GooglePlayBadge } from '@static/badge/googleplay.svg';

const PROTOCOLS = [
  {
    icon: EtherIcon,
    link: 'https://ethereum.org/'
  },
  {
    icon: DaiIcon,
    link: 'https://makerdao.com/'
  },
  {
    icon: CompoundIcon,
    link: 'https://compound.finance/'
  },
  {
    icon: PoolTogetherIcon,
    link: 'https://www.pooltogether.com/'
  },
  {
    icon: UniswapIcon,
    link: 'https://uniswap.org/'
  }
];

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        art_build: file(relativePath: { eq: "build.png" }) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={(data) => (
      <HeaderWrapper>
        <Container>
          <Grid>
            <Img fluid={data.art_build.childImageSharp.fluid} />
            <Text>
              <h1>access to new generation financial services at your fingertips</h1>
              <ProtocolIcons>
                {PROTOCOLS.map(({ icon, link }) => (
                  <ExternalLink href={link}>{icon()}</ExternalLink>
                ))}
              </ProtocolIcons>
              <h2>designed for crypto investors living in the future</h2>
              <StoreBadges>
                <ExternalLink href="https://apps.apple.com/us/app/goyemon-wallet/id1505210804?ls=1">{AppStoreBadge()}</ExternalLink>
                <ExternalLink href="https://play.google.com/store/apps/details?id=com.swarm.goyemon">{GooglePlayBadge()}</ExternalLink>
              </StoreBadges>
              {/* <AnchorLink href="#sign-up">
                <SignUpButton>Sign Up for Beta</SignUpButton>
              </AnchorLink> */}
            </Text>
          </Grid>
        </Container>
      </HeaderWrapper>
    )}
  />
);

const HeaderWrapper = styled.header`
  background-color: ${(props) => props.theme.color.primary};
  padding-top: 96px;

  @media (max-width: ${(props) => props.theme.screen.md}) {
    padding-top: 128px;
  }
`;

const ProtocolIcons = styled.div`
  display: flex;
  margin-top: 24px;
  margin-bottom: 48px;

  svg {
    color: ${(props) => props.theme.color.black.regular};
    margin: 0 8px;
    width: 40px;
    height: 40px;
  }

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    margin-top: 20px;
  }
`;

const StoreBadges = styled.div`
  display: flex;
  margin-top: 32px;
  margin-bottom: 24px;

  svg {
    color: ${(props) => props.theme.color.black.regular};
    margin: 0 8px;
    height: 48px;
  }

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    margin-top: 20px;
  }
`;

const Art = styled.figure`
  width: 100%;
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${(props) => props.theme.screen.md}) {
      width: 100%;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 64px;

  @media (max-width: ${(props) => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 80px;

    > ${Art} {
      order: 2;
    }
  }
`;

const Text = styled.div`
  justify-self: center;

  @media (max-width: ${(props) => props.theme.screen.md}) {
    justify-self: start;
  }
`;

// const SignUpButton = styled.button`
//   background-color: #00a3e2;
//   border: none;
//   border-radius: 8px;
//   color: #fff;
//   ${(props) => props.theme.font_size.small};
//   margin: 24px auto;
//   padding: 12px 16px;

//   @media (max-width: ${(props) => props.theme.screen.md}) {
//     justify-self: start;
//   }
// `;

export default Header;
