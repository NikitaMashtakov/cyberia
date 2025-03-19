import { FC } from 'react';
import styles from './Textarea.module.css';
import { InputContainer, StyledLabelForInput, StyledTextarea } from '../StyledComponents';

type Props = {
  name: string;
  id: string;
  text: string;
  value: string;
  onChange: ({ target }: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export const Textarea: FC<Props> = ({ name, id, text, value, onChange }) => {
  return (
    <InputContainer>
      <StyledLabelForInput htmlFor={id}>{text}</StyledLabelForInput>
      <StyledTextarea
        name={name}
        id={id}
        value={value}
        onChange={onChange}
      ></StyledTextarea>
    </InputContainer>
  );
};
