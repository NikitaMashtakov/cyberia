import { useLocation, Link } from 'react-router';
import styled from 'styled-components';

const BreadcrumbsContainer = styled.div`
  color: white;
  margin-left: 10px;
`;

type Route = {
  path: string;
  name: string;
};

const routes: Route[] = [
  { path: '/', name: 'Главная' },
  { path: '/cases', name: 'Кейсы' },
];

export const Breadcrumbs = () => {
  const location = useLocation();
  return <BreadcrumbsContainer></BreadcrumbsContainer>;
};
const BreadcrumbList = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
`;

const BreadcrumbItem = styled.li<{ isActive?: boolean }>`
  display: flex;
  align-items: center;

  &::after {
    content: '>';
    margin: 0 10px;
    color: #6c757d;
  }

  &:last-child::after {
    content: '';
    margin: 0;
  }

  a {
    text-decoration: none;
    color: #007bff;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }

  span {
    color: #6c757d;
    font-weight: 500;
  }
`;
