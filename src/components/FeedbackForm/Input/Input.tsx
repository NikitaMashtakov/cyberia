import { FC } from 'react';
import { InputContainer, StyledInput, StyledLabelForInput } from '../StyledComponents';

interface Props {
  type: string;
  id: string;
  name: string;
  text: string;
  value: string;
  onChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<Props> = ({ id, name, text, type, value, onChange }) => {
  return (
    <InputContainer>
      <StyledLabelForInput>{text}</StyledLabelForInput>
      <StyledInput
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        // error={error}
      />
    </InputContainer>
  );
};
