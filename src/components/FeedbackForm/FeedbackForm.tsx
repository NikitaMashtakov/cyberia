import { FC } from 'react';
import styles from './FeedbackForm.module.css';
import { Input } from './Input/Input';
import { Textarea } from './Textarea/Textarea';
import { FormRow, StyledForm, SubmitButton } from './StyledComponents';
import CheckboxInput from './CheckboxInput/CheckboxInput';

type Props = {
  children: string;
};

export const FeedbackForm: FC<Props> = ({ children }) => {
  return (
    <>
      <StyledForm>
        <h1>{children}</h1>

        <FormRow>
          <Input type={'text'} name={'name'} id={'name'} text={'Ваше имя'} />

          <Input type={'email'} name={'email'} id={'email'} text={'Email'} />

          <Input type={'text'} name={'phone'} id={'phone'} text={'Телефон'} />
        </FormRow>
        <FormRow>
          <Textarea name={'message'} id={'message'} />
        </FormRow>
        <CheckboxInput text={'Согласие на обработку персональных данных'} />
        <SubmitButton>Обсудить проект</SubmitButton>
      </StyledForm>
    </>
  );
};
