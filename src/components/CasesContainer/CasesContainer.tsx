import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import CornerBlue from '../../assets/corner_blue.svg?react';
import { CasesFilter } from '../CasesFilter/CasesFilter';

interface Item {
  id: number;
  title: string;
  image: string;
  image_dark: string;
  // ... другие поля
}
interface Category {
  id: number;
  name: string;
}

type Props = {
  items: Item[];
  categories: Category[];
};

const CasesContainer: FC<Props> = ({ items, categories }) => {
  return (
    <>
      <CasesFilter categories={categories}></CasesFilter>
      <GridContainer>
        {items.map((item) => (
          <ImageCard key={item.id}>
            <ImageWrapper>
              <Image
                src={item.image}
                alt={item.title}
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                  e.currentTarget.style.display = 'none';
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
    </>
  );
};

const GridContainer = styled.div`
  margin: auto;
  max-width: 1241px; /* 3 * 387px + 2 * 40px (gap) */
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(3, 1fr); /* Точно 3 столбца */
  padding: 16px;
  // width: 65vw;

  @media (max-width: 1240px) {
    max-width: 814px;

    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
  @media (max-width: 814px) {
    max-width: 387px; /* 3 * 387px + 2 * 40px (gap) */

    grid-template-columns: repeat(1, 1fr);
    gap: 40px;
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
  top: -6px;
  right: -6px;
  background-color: transparent;
`;

export default CasesContainer;
