import { FC } from 'react';
import styles from './Input.module.css';

type Props = {
  type: string;
  name: string;
  id: string;
};

export const Input: FC<Props> = ({ type, name, id }) => {
  return (
    <div className={styles.input}>
      <label htmlFor={id}>Ваше имя</label>
      <input type={type} name={name} id={id} />
    </div>
  );
};
