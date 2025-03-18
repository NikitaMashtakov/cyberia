import { FC, ChangeEvent, useState } from 'react';
import styles from './FeedbackForm.module.css';
import { Input } from './Input/Input';
import { Textarea } from './Textarea/Textarea';
import { FormRow, StyledForm, SubmitButton } from './StyledComponents';
import CheckboxInput from './CheckboxInput/CheckboxInput';
import { Title } from '../CasesContainer/CasesContainer';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styled from 'styled-components';

type Props = {
  children: string;
};

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};
const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const schema = yup
  .object()
  .shape({
    name: yup.string().max(30).min(2).required(),
    email: yup.string().email().required(),
    phone: yup.string().matches(phoneRegExp).required(),
    message: yup.string().max(1000).required(),
  })
  .required();

export const FeedbackForm: FC<Props> = ({ children }) => {
  // const [formData, setFormData] = useState<FormData>({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   message: '',
  // });
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });
  const [accepted, setAccepted] = useState<boolean>(false);
  const sendFormDataToServer = (data: FormData) => {
    console.log(data);
  };
  // const handleNameChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
  //   setFormData({ ...formData, name: target.value });
  // };
  // const handleEmailChange = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
  //   setFormData({ ...formData, email: target.value });
  // const handlePhoneChange = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
  //   setFormData({ ...formData, phone: target.value });
  // const handleMessageChange = ({ target }: React.ChangeEvent<HTMLTextAreaElement>) =>
  //   setFormData({ ...formData, message: target.value });
  const handleAcceptedChange = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    setAccepted(target.checked);

  // const { name, email, phone, message } = formData;
  return (
    <>
      <Title>{children}</Title>
      <StyledForm onSubmit={handleSubmit(sendFormDataToServer)}>
        <FormRow>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input
                type={'text'}
                // name={'name'}
                id={'name'}
                text={'Ваше имя'}
                {...field}
                {...register('name')}
                // onChange={handleNameChange}
              />
            )}
          />
          <Error>{errors.name?.message}</Error>
          <Input
            type={'email'}
            // name={'email'}
            id={'email'}
            text={'Email'}
            value={email}
            {...register('email')}
            // onChange={handleEmailChange}
          />
          <Error>{errors.email?.message}</Error>

          <Input
            // type={'text'}
            // name={'phone'}
            id={'phone'}
            text={'Телефон'}
            // value={phone}
            {...register('phone')}
            // onChange={handlePhoneChange}
          />
          <Error>{errors.phone?.message}</Error>
        </FormRow>
        <FormRow>
          <Textarea
            // name={'message'}
            id={'message'}
            {...register('message')}
            // onChange={handleMessageChange}
            // value={message}
          />
          <Error>{errors.message?.message}</Error>
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

const Error = styled.p`
  color: #bf1650;

  p &::before {
    display: inline;
    content: '⚠ ';
  }
`;
