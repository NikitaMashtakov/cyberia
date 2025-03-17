import { FC } from 'react';
import styles from './Textarea.module.css';
import { InputContainer, StyledLabelForInput, StyledTextarea } from '../StyledComponents';

type Props = {
  name: string;
  id: string;
  // value: string;
  // onChange: ({ target }: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export const Textarea: FC<Props> = ({ name, id }) => {
  return (
    <InputContainer>
      <StyledLabelForInput htmlFor={id}>Сообщение</StyledLabelForInput>
      <StyledTextarea
        name={name}
        id={id}
        // value={value}
        // onChange={onChange}
      ></StyledTextarea>
    </InputContainer>
  );
};
