import React, {useContext, useEffect, useState} from 'react';
import TimeKeepingComponent from '../../components/TimeKeeping';
import {GlobalContext} from '../../context/Provider';
import publicIP from 'react-native-public-ip';

const TimeKeeping = () => {
  const [form, setForm] = useState({});
  const {
    authDispath,
    authState: {error, loading},
  } = useContext(GlobalContext);

  const onSubmit = () => {
    publicIP()
      .then(ip => {
        form.ip = ip;
      })
      .catch(error => {
        error = error;
      });
  };
  return (
    <TimeKeepingComponent onSubmit={onSubmit} error={error} loading={loading} />
  );
};
export default TimeKeeping;
