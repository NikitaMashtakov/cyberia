import { FC } from 'react';
import { InputContainer, StyledInput, StyledLabelForInput } from '../StyledComponents';

interface Props {
  type: string;
  id: string;
  name: string;
  text: string;
}

export const Input: FC<Props> = ({ type, id, name, text }) => {
  return (
    <InputContainer>
      <StyledLabelForInput>{text}</StyledLabelForInput>
      <StyledInput type={type} name={name} id={id} />
    </InputContainer>
  );
};
