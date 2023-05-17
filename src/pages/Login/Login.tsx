import React from 'react';
import { getContacts } from '../../api';
import { useAppDispatch } from '../../redux/config';
import { configLoad } from '../../redux/reducers/globalReducer/globalReducer';
import { useNavigate } from 'react-router-dom';

import styles from './Login.module.scss';

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const inputs = form.elements as HTMLFormControlsCollection;
    const idInstanceInput = (inputs.namedItem('id') as HTMLInputElement)?.value;
    const apiKeyInput = (inputs.namedItem('apiKey') as HTMLInputElement)?.value;

    if (!idInstanceInput || !apiKeyInput) return;
    const config = {
      id: idInstanceInput,
      apiKey: apiKeyInput,
    };

    const response = await getContacts({
      IdInstance: config.id,
      ApiTokenInstance: config.apiKey,
    }).then((e) => {
      if (e.code) {
        return false;
      } else {
        return true;
      }
    });

    if (!response) return;
    dispatch(
      configLoad({
        config: { IdInstance: config.id, ApiTokenInstance: config.apiKey },
      })
    );

    const configStorage = sessionStorage.setItem(
      'config',
      JSON.stringify(config)
    );

    navigate('/');
  };

  React.useEffect(() => {
    const config = sessionStorage.getItem('config');
    if (config) {
      navigate('/');
    }
  }, []);

  return (
    <form className={styles.formLogin} onSubmit={handleSubmit}>
      <h1 className={styles.title}>Login</h1>
      <div className={styles.formGroup}>
        <div className={styles.formInputGroup}>
          <label htmlFor="id">IdInstance</label>
          <input id="id" type="text" className={styles.formInput} required />
        </div>
        <div className={styles.formInputGroup}>
          <label htmlFor="apiKey">ApiTokenInstance</label>
          <input
            id="apiKey"
            type="text"
            className={styles.formInput}
            required
          />
        </div>

        <button type="submit" className={styles.formButton}>
          Login
        </button>
      </div>
    </form>
  );
};

export default Login;
