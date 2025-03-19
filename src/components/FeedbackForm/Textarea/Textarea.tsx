import { FC } from 'react';
import styles from './Textarea.module.css';
import {
  InputContainer,
  StyledLabelForInput,
  StyledTextarea,
  Error,
} from '../StyledComponents';
import styled from 'styled-components';

type Props = {
  name: string;
  id: string;
  text: string;
  value: string;
  onChange: ({ target }: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
};

export const Textarea: FC<Props> = ({ name, id, text, value, onChange, error }) => {
  return (
    <InputContainer>
      <StyledLabelForInput htmlFor={id}>{text}</StyledLabelForInput>
      <StyledTextarea
        name={name}
        id={id}
        value={value}
        onChange={onChange}
      ></StyledTextarea>
      <Error>{error}</Error>
    </InputContainer>
  );
};
