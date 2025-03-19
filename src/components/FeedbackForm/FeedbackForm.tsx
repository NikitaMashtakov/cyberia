import { FC, ChangeEvent, useState } from 'react';
import styles from './FeedbackForm.module.css';
import { Input } from './Input/Input';
import { Textarea } from './Textarea/Textarea';
import { FormRow, StyledForm, SubmitButton, Error } from './StyledComponents';
import CheckboxInput from './CheckboxInput/CheckboxInput';
import { Title } from '../CasesContainer/CasesContainer';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styled from 'styled-components';
import axios from 'axios';

type Props = {
  children: string;
};

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  accepted: boolean;
};
// const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const phoneRegex = /^\d{10}$/;

const schema = yup
  .object()
  .shape({
    name: yup.string().max(30).required('Заполните поле'),
    email: yup.string().email('Введите действительный адрес').required('Заполните поле'),
    phone: yup
      .string()
      .matches(phoneRegex, 'Номер должен быть 10-значным')
      .required('Заполните поле'),
    message: yup.string().max(1000).required('Заполните поле'),
    accepted: yup
      .boolean()
      .oneOf([true], 'Необходимо согласиться на обработку персональных данных')
      .required(),
  })
  .required();

export const FeedbackForm: FC<Props> = ({ children }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      accepted: false,
    },
  });

  const sendFormDataToServer = async (data: FormData) => {
    try {
      const { accepted, ...formData } = data;
      const response = await axios
        .post('https://api.test.cyberia.studio/api/v1/feedbacks', formData)
        .then((response) => {
          if (response.status !== 200) {
            console.log('Ошибка отправки данных');
          }
        })
        .then((error) => console.log(error));
      console.log(response);
    } catch (err) {
      throw err;
    }
  };

  return (
    <>
      <Title>{children}</Title>
      <StyledForm onSubmit={handleSubmit(sendFormDataToServer)}>
        <FormRow>
          <Controller
            name={'name'}
            control={control}
            render={({ field }) => (
              <Input
                type={'text'}
                id={'name'}
                text={'Ваше имя'}
                error={errors.name?.message}
                {...field}
              />
            )}
          />

          <Controller
            name={'email'}
            control={control}
            render={({ field }) => (
              <Input
                type={'email'}
                id={'email'}
                text={'Email'}
                error={errors.email?.message}
                {...field}
              />
            )}
          />

          <Controller
            control={control}
            name={'phone'}
            render={({ field }) => (
              <Input
                type={'text'}
                id={'phone'}
                text={'Телефон'}
                error={errors.phone?.message}
                placeholder={'+7'}
                {...field}
              />
            )}
          />
        </FormRow>

        <FormRow>
          <Controller
            control={control}
            name={'message'}
            render={({ field }) => (
              <Textarea
                id={'message'}
                text={'Сообщение'}
                error={errors.message?.message}
                {...field}
              />
            )}
          />
        </FormRow>

        <FormRow>
          <Controller
            name={'accepted'}
            control={control}
            render={({ field }) => (
              <CheckboxInput
                text="Согласие на обработку персональных данных"
                {...field}
                error={errors.accepted?.message}
              />
            )}
          />
        </FormRow>

        <FormRow>
          <Error>{errors.accepted?.message}</Error>
        </FormRow>

        <SubmitButton type="submit">Обсудить проект</SubmitButton>
      </StyledForm>
    </>
  );
};
