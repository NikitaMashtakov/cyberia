import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import CornerBlue from '../../assets/corner_blue.svg?react';
import { useStore } from '../../store/store';
import { CasesFilter } from '../CasesFilter/CasesFilter';
import { Loader } from '../Loader/Loader';
import { Case, Category } from '../../types/types';

const CasesContainer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { cases, activeCategory, fetchCases, fetchCategories } = useStore();
  useEffect(() => {
    setIsLoading(true);
    Promise.all([fetchCategories(), fetchCases()])
      .then(() => setIsLoading(false))
      .catch((err) => console.log(err));
  }, []);

  const filterCategory = ({ categories }: Case) => {
    if (activeCategory !== null) {
      return categories.some((category) => category.id === activeCategory);
    } else return true;
  };

  return (
    <>
      <Title>Кейсы</Title>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <CasesFilter />
          <GridContainer>
            {cases.filter(filterCategory).map((item) => (
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
      )}
    </>
  );
};

const GridContainer = styled.div`
  margin: auto;
  max-width: 1241px;
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(3, 1fr);
  padding: 10px;
  width: 65vw;

  @media (max-width: 1240px) {
    max-width: 814px;

    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
  @media (max-width: 814px) {
    max-width: 387px;

    grid-template-columns: repeat(1, 1fr);
    gap: 40px;
  }
`;

const ImageCard = styled.div`
  position: relative;
  padding-bottom: 97.67%;
`;

const ImageWrapper = styled.div`
  position: absolute;
  inset: 0;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
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

const IconWrapper = styled.div`
  position: absolute;
  top: -6px;
  right: -6px;
  background-color: transparent;
`;

export const Title = styled.h1`
  display: flex;
  color: white;
  font-weight: 600;
  font-size: 48px;
  padding: 10px;
  margin-bottom: 40px;
`;

export default CasesContainer;
