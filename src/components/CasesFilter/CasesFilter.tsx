import { FC, useEffect } from 'react';
import styled from 'styled-components';
import { useStore } from '../../store/store';
import { FilterButton } from './FilterButton';

type Category = {
  id: number;
  name: string;
};
type Props = {
  categories: Category[];
};
export const CasesFilter = () => {
  const { categories, isLoading, activeCategory, setActiveCategory, fetchCategories } =
    useStore();
  useEffect(() => {
    fetchCategories();
  }, []);
  const onFilterClick = (id: number) => {
    setActiveCategory(id);
  };
  return (
    <>
      {!isLoading && (
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
      )}
    </>
  );
};

const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
