import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../redux/config';
import { configLoad } from '../../redux/reducers/globalReducer/globalReducer';

// Components
import FormSubmit from '../../Components/FormSubmit/FormSubmit';

import styles from './Home.module.scss';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const config = sessionStorage.getItem('config');
    if (!config) {
      navigate('/login');
    } else {
      const parseConfig = JSON.parse(config);
      dispatch(
        configLoad({
          config: {
            IdInstance: parseConfig.id,
            ApiTokenInstance: parseConfig.apiKey,
          },
        })
      );
    }
  }, []);

  return (
    <div className={styles.container}>
      <FormSubmit />
    </div>
  );
};

export default Home;
