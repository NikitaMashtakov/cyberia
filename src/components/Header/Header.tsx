import { FC } from 'react';
import styled from 'styled-components';
import Logo from './../../assets/logo.svg?react';

// Логотип (можно заменить на ваш SVG или изображение)
const StyledLogo = styled(Logo)`
  width: 100px;
  height: auto;
`;

// Стили для Header
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

// Стили для меню
const Menu = styled.nav`
  display: flex;
  gap: 40px;

  @media (max-width: 768px) {
    margin-top: 20px;
    gap: 20px;
  }
`;

// Стили для ссылок в меню
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
      {/* Логотип */}
      <StyledLogo />

      {/* Меню навигации */}
      <Menu>
        <MenuItem href="#agency">Агентство</MenuItem>
        <MenuItem href="#services">Услуги</MenuItem>
        <MenuItem href="#cases">Кейсы</MenuItem>
        <MenuItem href="#blog">Блог</MenuItem>
        <MenuItem href="#contacts">Контакты</MenuItem>
      </Menu>
    </HeaderContainer>
  );
};

export default Header;
