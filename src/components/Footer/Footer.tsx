import styled from 'styled-components';
import Logo from './../../assets/logo.svg?react';
import { NavLink } from 'react-router';
const FooterColumn = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: self-start;
  max-width: 196px;
  gap: 23px;
  font-size: 18px;
`;

const StyledLogo = styled(Logo)`
  width: 196px;
  height: auto;
`;

const FooterContainer = styled.footer`
  padding: 131px 0px;
  background: #313341;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  gap: 56px;
  background: #313341;
  padding-left: 10px;
  width: 65vw;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  color: white;
  text-decoration: none;
`;

const StyledP = styled.p``;
export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <StyledLogo />
          <p>Веб-разработка и усиление IT-команд</p>
        </FooterColumn>
        <FooterColumn>
          <p>+7 999 123 45 67</p>
          <p>hello@cyberia.studio</p>
          <p>ул.Ярных, д.35, оф.10</p>
        </FooterColumn>
        <FooterColumn>
          <StyledNavLink to="/agency">Агентство</StyledNavLink>
          <StyledNavLink to="/services">Услуги</StyledNavLink>
          <StyledNavLink to="/cases">Кейсы</StyledNavLink>
        </FooterColumn>
        <FooterColumn>
          <StyledNavLink to="/blog">Блог</StyledNavLink>
          <StyledNavLink to="/contacts">Контакты</StyledNavLink>
        </FooterColumn>
      </FooterContent>
    </FooterContainer>
  );
};
