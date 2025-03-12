import { FC } from 'react';
import styled from 'styled-components';

type Props = {
  text: string;
  isActive: boolean;
  onClick: () => void;
};

export const FilterButton: FC<Props> = ({ text, isActive, onClick }) => {
  return (
    <Button $isActive={isActive} onClick={onClick}>
      {text}
    </Button>
  );
};

const Button = styled.button<{ $isActive?: boolean }>`
  display: flex;
  color: white;
  padding: 8px 20px;
  background-color: ${({ $isActive }) =>
    $isActive ? '#659cff' : '#313341'}; // Цвет фона
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2d76f9; // Изменение цвета при наведении
  }

  @media (max-width: 768px) {
    margin-top: 10px;
    display: block;
    width: 100%;
  }
`;
