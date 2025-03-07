import { FC } from 'react';
import styles from './Textarea.module.css';

type Props = {
  name: string;
  id: string;
};

export const Textarea: FC<Props> = ({ name, id }) => {
  return (
    <div className={styles.textarea}>
      <label htmlFor={id}>Сообщение</label>
      <textarea name={name} id={id}></textarea>
    </div>
  );
};
