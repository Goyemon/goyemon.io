import React from 'react';
import styled from 'styled-components';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import { ReactComponent as GithubIcon } from '@static/icons/github.svg';
import { ReactComponent as TwitterIcon } from '@static/icons/twitter.svg';
import { ReactComponent as DiscordIcon } from '@static/icons/discord.svg';

const SOCIAL = [
  {
    icon: DiscordIcon,
    link: 'https://discord.gg/MXGfnJG'
  },
  {
    icon: TwitterIcon,
    link: 'https://twitter.com/GoyemonOfficial'
  },
  {
    icon: GithubIcon,
    link: 'https://github.com/Goyemon'
  }
];

const Footer = () => (
  <React.Fragment>
    <FooterWrapper>
      <StyledContainer>
        <Copyright>
          <h2>goyemon</h2>
        </Copyright>
        <SocialIcons>
          {SOCIAL.map(({ icon, link }) => (
            <ExternalLink href={link}>{icon()}</ExternalLink>
          ))}
        </SocialIcons>
      </StyledContainer>
    </FooterWrapper>
  </React.Fragment>
);

const SocialIcons = styled.div`
  display: flex;

  svg {
    color: ${(props) => props.theme.color.black.regular};
    margin: 0 8px;
    width: 32px;
    height: 32px;
  }

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    margin-top: 20px;
  }
`;

const FooterWrapper = styled.footer`
  background-color: ${(props) => props.theme.color.primary};
  padding: 32px 0;
`;

const Copyright = styled.div`
  font-family: ${(props) => props.theme.font.secondary};
  font-size: 4;
  color: ${(props) => props.theme.color.black.regular};

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Art = styled.figure`
  display: flex;
  justify-content: center;
  margin: 0;
  margin-top: 48px;
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    flex-direction: column;
    text-align: center;
  }
`;

export default Footer;
