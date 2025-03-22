import { FC } from 'react';
import styled from 'styled-components';
import Logo from './../../assets/logo.svg?react';
import { NavLink } from 'react-router';

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

const MenuItem = styled(NavLink)`
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
      <MenuItem to="/">
        <StyledLogo />
      </MenuItem>
      <MenuContainer>
        <MenuItem to="/agency">Агентство</MenuItem>
        <MenuItem to="/services">Услуги</MenuItem>
        <MenuItem to="/cases">Кейсы</MenuItem>
        <MenuItem to="/blog">Блог</MenuItem>
        <MenuItem to="/contacts">Контакты</MenuItem>
      </MenuContainer>
    </HeaderContainer>
  );
};

export default Header;
