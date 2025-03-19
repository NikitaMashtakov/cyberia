import { FC } from 'react';
import {
  CheckboxContainer,
  StyledCheckboxInput,
  StyledLabelForCheckbox,
  Error,
  FormRow,
} from '../StyledComponents';

type Props = {
  text: string;
  onChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};
const CheckboxInput: FC<Props> = ({ text, onChange, error }) => {
  return (
    <>
      <CheckboxContainer>
        <StyledCheckboxInput onChange={onChange} />
        <StyledLabelForCheckbox>{text}</StyledLabelForCheckbox>
      </CheckboxContainer>
    </>
  );
};

export default CheckboxInput;
