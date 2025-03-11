import { FC } from 'react';
import {
  CheckboxContainer,
  StyledCheckboxInput,
  StyledLabelForCheckbox,
} from '../StyledComponents';

type Props = {
  text: string;
  checked: boolean;
  onChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
};
const CheckboxInput: FC<Props> = ({ text, checked, onChange }) => {
  return (
    <CheckboxContainer>
      <StyledCheckboxInput checked={checked} onChange={onChange} />
      <StyledLabelForCheckbox>{text}</StyledLabelForCheckbox>
    </CheckboxContainer>
  );
};

export default CheckboxInput;
