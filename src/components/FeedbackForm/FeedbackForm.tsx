import { FC, ChangeEvent, useState } from 'react';
import styles from './FeedbackForm.module.css';
import { Input } from './Input/Input';
import { Textarea } from './Textarea/Textarea';
import { FormRow, StyledForm, SubmitButton } from './StyledComponents';
import CheckboxInput from './CheckboxInput/CheckboxInput';

type Props = {
  children: string;
};

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export const FeedbackForm: FC<Props> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [accepted, setAccepted] = useState<boolean>(false);
  const sendFormDataToServer = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };
  const handleNameChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, name: target.value });
  };
  const handleEmailChange = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, email: target.value });
  const handlePhoneChange = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, phone: target.value });
  const handleMessageChange = ({ target }: React.ChangeEvent<HTMLTextAreaElement>) =>
    setFormData({ ...formData, message: target.value });
  const handleAcceptedChange = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    setAccepted(target.checked);

  const { name, email, phone, message } = formData;
  return (
    <>
      <StyledForm onSubmit={sendFormDataToServer}>
        <h1>{children}</h1>

        <FormRow>
          <Input
            type={'text'}
            name={'name'}
            id={'name'}
            text={'Ваше имя'}
            value={name}
            onChange={handleNameChange}
          />

          <Input
            type={'email'}
            name={'email'}
            id={'email'}
            text={'Email'}
            value={email}
            onChange={handleEmailChange}
          />

          <Input
            type={'text'}
            name={'phone'}
            id={'phone'}
            text={'Телефон'}
            value={phone}
            onChange={handlePhoneChange}
          />
        </FormRow>
        <FormRow>
          <Textarea
            name={'message'}
            id={'message'}
            onChange={handleMessageChange}
            value={message}
          />
        </FormRow>
        <CheckboxInput
          text={'Согласие на обработку персональных данных'}
          checked={accepted}
          onChange={handleAcceptedChange}
        />
        <SubmitButton type="submit">Обсудить проект</SubmitButton>
      </StyledForm>
    </>
  );
};
