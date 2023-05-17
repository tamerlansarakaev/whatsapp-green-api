import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/config';
import { changePhoneNumber } from '../../redux/reducers/globalReducer/globalReducer';

import styles from './FormSubmit.module.scss';

const FormSubmit = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.target as HTMLFormElement;
    const inputs = form.elements as HTMLFormControlsCollection;
    const phoneNumberInput = (inputs.namedItem('phone') as HTMLInputElement)
      ?.value;

    if (!phoneNumberInput) return;

    dispatch(changePhoneNumber({ phoneNumber: `${phoneNumberInput}@c.us` }));
    navigate('/chat');
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          type="number"
          className={styles.formInput}
          required
          minLength={11}
          placeholder="Example: 79999999"
        />
        <button className={styles.formButton}>Open Chat</button>
      </div>
    </form>
  );
};

export default FormSubmit;
