import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 65vw;
  background: transparent;
`;

export const FormRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  margin: 10px 10px;
  width: 100%;
`;

export const StyledInput = styled.input`
  padding: 10px;
  border-radius: 11px;
  width: 100%;
  border: 1.5px solid #9aa8ba;
  font-size: 1rem;
  outline: none;
  &:focus {
    border: 1.5px solid #2d76f9;
  }
`;

export const StyledLabelForInput = styled.label`
  position: absolute;
  top: -10px;
  left: 10px;
  padding: 0 5px;
  color: #ffefef;
`;

export const StyledTextarea = styled.textarea`
  padding: 10px;
  border-radius: 11px;
  width: 100%;
  border: 1.5px solid #9aa8ba;
  font-size: 1.2rem;
  outline: none;
  resize: none;
  &:focus {
    border: 1.5px solid #2d76f9;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  margin: 10px 10px;
  width: 100%;
`;

export const StyledCheckboxInput = styled.input.attrs({ type: 'checkbox' })``;

export const StyledLabelForCheckbox = styled.label`
  padding: 0 5px;
  color: #ffefef;
`;

export const SubmitButton = styled.button`
  margin: 10px 10px;
  color: #fff;
  background: #2d76f9;
  border: none;
  border-radius: 85px;
  padding: 20px 45px;
  font-size: 18px;
  font-weight: 400;
  font-family: 'Fira Sans Condensed';
`;
