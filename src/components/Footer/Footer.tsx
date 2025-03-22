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
  gap: 20px;
`;

const StyledLogo = styled(Logo)`
  width: 196px;
  height: auto;
`;

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 50px;
  margin: 50px 10px;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  color: white;
  text-decoration: none;
`;
export const Footer = () => {
  return (
    <FooterContainer>
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
    </FooterContainer>
  );
};
