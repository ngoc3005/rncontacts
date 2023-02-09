import React, {useContext, useEffect, useState} from 'react';
import TimeKeepingComponent from '../../components/TimeKeeping';
import {GlobalContext} from '../../context/Provider';
import publicIP from 'react-native-public-ip';
import Geolocation from '@react-native-community/geolocation';
import timeKeeping from '../../context/actions/timeKeeping';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TimeKeeping = () => {
  const [form, setForm] = useState({});
  const {
    authDispath,
    authState: {error, loading},
  } = useContext(GlobalContext);

  const onSubmit = () => {
    publicIP()
      .then(ip => {
        form.ipUser = ip;
      })
      .catch(error => {
        error = error;
      });
    Geolocation.getCurrentPosition(info => {
      form.latitudeUser = info.coords.latitude;
      form.longitudeUser = info.coords.longitude;
    });
    AsyncStorage.getItem('userId').then(res => {
      form.userId = res;
    });
    form.attendanceTime = '123';
    form.attendanceType = '123123';
    timeKeeping(form)(authDispath);
  };
  return (
    <TimeKeepingComponent onSubmit={onSubmit} error={error} loading={loading} />
  );
};
export default TimeKeeping;
