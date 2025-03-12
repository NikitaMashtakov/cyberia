import { FC, useEffect } from 'react';
import styled from 'styled-components';
import { useStore } from '../../store/store';

interface Category {
  id: number;
  name: string;
}
type Props = {
  categories: Category[];
};
export const CasesFilter = () => {
  const { categories, fetchCategories } = useStore();
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <>
      {categories.map((category) => (
        <FilterButton>{category.name}</FilterButton>
      ))}
    </>
  );
};

const FilterButton = styled.button``;
