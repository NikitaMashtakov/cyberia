import { FC } from 'react';
import {
  CheckboxContainer,
  StyledCheckboxInput,
  StyledLabelForCheckbox,
  StyledLabelForInput,
} from '../StyledComponents';

type Props = {
  text: string;
};
const CheckboxInput: FC<Props> = ({ text }) => {
  return (
    <CheckboxContainer>
      <StyledCheckboxInput />
      <StyledLabelForCheckbox>{text}</StyledLabelForCheckbox>
    </CheckboxContainer>
  );
};

export default CheckboxInput;
