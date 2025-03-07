import { FC } from 'react';
import styles from './FeedbackForm.module.css';
import { Input } from '../Input/Input';
import { Textarea } from '../Textarea/Textarea';

type Props = {
  children: string;
};

export const FeedbackForm: FC<Props> = ({ children }) => {
  return (
    <>
      <form className={styles.form}>
        <h1>{children}</h1>

        <div className={styles.formHead}>
          <Input type={'text'} name={'name'} id={'name'} />

          <Input type={'email'} name={'email'} id={'email'} />

          <Input type={'text'} name={'phone'} id={'phone'} />
        </div>
        <div className={styles.formBody}>
          <Textarea name={'message'} id={'message'} />
        </div>
      </form>
    </>
  );
};
