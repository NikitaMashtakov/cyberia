import { FC } from 'react';
import { InputContainer, StyledInput, StyledLabelForInput } from '../StyledComponents';

interface Props {
  // type: string;
  id: string;
  name: string;
  text: string;
  // value: string;
  // onChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<Props> = ({ id, name, text }) => {
  return (
    <InputContainer>
      <StyledLabelForInput>{text}</StyledLabelForInput>
      <StyledInput name={name} id={id} />
    </InputContainer>
  );
};
