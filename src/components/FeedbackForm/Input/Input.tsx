import { FC } from 'react';
import {
  InputContainer,
  Placeholder,
  StyledInput,
  StyledLabelForInput,
} from '../StyledComponents';
import styled from 'styled-components';

interface Props {
  type: string;
  id: string;
  name: string;
  text: string;
  value: string;
  onChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder?: string;
}

export const Input: FC<Props> = ({
  id,
  name,
  text,
  type,
  value,
  onChange,
  error,
  placeholder,
}) => {
  return (
    <InputContainer>
      <StyledLabelForInput>{text}</StyledLabelForInput>
      <Placeholder>{placeholder}</Placeholder>
      <StyledInput
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        // placeholder={placeholder}
      />
      <Error>{error}</Error>
    </InputContainer>
  );
};

const Error = styled.p`
  color: #bf1650;

  p &::before {
    display: inline;
    content: '⚠ ';
  }
`;
