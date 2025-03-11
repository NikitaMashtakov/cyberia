import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import CornerBlue from '../../assets/corner_blue.svg?react';

interface Item {
  id: number;
  title: string;
  image: string;
  image_dark: string;
  // ... другие поля
}

interface Props {
  items: Item[];
}

const CasesContainer: FC<Props> = ({ items }) => {
  console.log(CornerBlue);
  return (
    <GridContainer>
      {items.map((item) => (
        <ImageCard key={item.id}>
          <ImageWrapper>
            <Image
              src={item.image}
              alt={item.title}
              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                e.currentTarget.style.display = 'none'; // скрыть сломанное изображение
                console.log('error');
              }}
            />
            <TitleOverlay>
              {item.title}
              <IconWrapper>
                <CornerBlue style={{ backgroundColor: 'transparent' }} />
              </IconWrapper>
            </TitleOverlay>
          </ImageWrapper>
        </ImageCard>
      ))}
    </GridContainer>
  );
};

const GridContainer = styled.div`
  margin: auto;
  max-width: 1241px; /* 3 * 387px + 2 * 40px (gap) */
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(3, 1fr); /* Точно 3 столбца */
  padding: 16px;
  width: 100%;

  @media (max-width: 1240px) {
    max-width: 814px; /* 3 * 387px + 2 * 40px (gap) */

    grid-template-columns: repeat(2, 1fr); /* На мобильных 2 элемента */
    gap: 40px; /* Сократили отступы */
  }
  @media (max-width: 814px) {
    max-width: 327px; /* 3 * 387px + 2 * 40px (gap) */

    grid-template-columns: repeat(1, 1fr); /* На мобильных 2 элемента */
    gap: 40px; /* Сократили отступы */
  }
`;

const ImageCard = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 97.67%; /* Точное соотношение 387x378 (378/387 = ~97.67%) */
  background-color: #f0f0f0;
  overflow: hidden;
  border-radius: 8px;
`;

const ImageWrapper = styled.div`
  position: absolute;
  inset: 0;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

const TitleOverlay = styled.div`
  position: absolute;
  top: 17px;
  right: 17px;
  padding: 8px 12px;
  background: #313341;
  color: white;
  border-radius: 4px;
  font-size: 24px;
  font-weight: 600;
  width: 122px;
  height: 122px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Новый компонент для иконки
const IconWrapper = styled.div`
  position: absolute;
  top: -6px; /* -50% от высоты иконки (25px / 2 = 12.5px) */
  right: -6px;
  background-color: transparent;
`;

export default CasesContainer;
