import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useStore } from '../../store/store';
import { FilterButton } from './FilterButton';
import { Category } from '../../types/types';

type Props = {
  categories: Category[];
};
export const CasesFilter: FC = () => {
  const { categories, activeCategory, setActiveCategory } = useStore();

  const onFilterClick = (id: number) => {
    setActiveCategory(id);
  };
  return (
    <>
      <FilterContainer>
        <FilterButton
          onClick={() => setActiveCategory(null)}
          isActive={activeCategory === null}
          text={'Все'}
        />
        {categories.map(({ name, id }) => (
          <FilterButton
            key={id}
            onClick={() => onFilterClick(id)}
            isActive={activeCategory === id}
            text={name}
          />
        ))}
      </FilterContainer>
    </>
  );
};

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
  gap: 30px;
  width: 65vw;
  margin: auto;
  // @media (max-width: 1240px) {
  //   flex-direction: column;
  // }
`;
