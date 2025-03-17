import { FC } from 'react';
import styled from 'styled-components';
import Logo from './../../assets/logo.svg?react';

const StyledLogo = styled(Logo)`
  width: 100px;
  height: auto;
`;

const HeaderContainer = styled.header`
  width: 65vw;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 20px 10px;
  color: white; // Цвет текста
  gap: 100px;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const MenuContainer = styled.nav`
  display: flex;
  gap: 40px;

  @media (max-width: 768px) {
    margin-top: 20px;
    gap: 20px;
  }
`;

const MenuItem = styled.a`
  font-size: 16px;
  color: white;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #ecf0f1; // Изменение цвета при наведении
  }
`;

// Компонент Header
const Header: FC = () => {
  return (
    <HeaderContainer>
      <StyledLogo />
      <MenuContainer>
        <MenuItem href="#agency">Агентство</MenuItem>
        <MenuItem href="#services">Услуги</MenuItem>
        <MenuItem href="#cases">Кейсы</MenuItem>
        <MenuItem href="#blog">Блог</MenuItem>
        <MenuItem href="#contacts">Контакты</MenuItem>
      </MenuContainer>
    </HeaderContainer>
  );
};

export default Header;
