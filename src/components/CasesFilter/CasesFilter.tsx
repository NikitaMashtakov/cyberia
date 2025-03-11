import { FC } from 'react';
import styled from 'styled-components';

interface Category {
  id: number;
  name: string;
}
type Props = {
  categories: Category[];
};
export const CasesFilter: FC<Props> = ({ categories }) => {
  return  ({categories.map((category)=> <FilterButton>{category.name}</FilterButton>)})
};

const FilterButton = styled.button`

`
