import {useNavigation} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import RegisterComponent from '../../components/Signup';
import {LOGIN} from '../../constants/routeNames';
import register, {clearAuthState} from '../../context/actions/auth/register';
import {GlobalContext} from '../../context/Provider';
import {useFocusEffect} from '@react-navigation/native';
import TakeLeaveComponent from '../../components/TakeLeave';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TakeLeave = () => {
  const [form, setForm] = useState({});
  const {navigate} = useNavigation();
  const [errors, setErrors] = useState({});
  const {
    authDispath,
    authState: {error, loading, user},
  } = useContext(GlobalContext);

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});

    if (value !== '') {
      setErrors(prev => {
        return {...prev, [name]: null};
      });
    } else {
      setErrors(prev => {
        return {...prev, [name]: 'This is field require'};
      });
    }
  };
  const onSubmit = () => {
    if (!form.userName) {
      setErrors(prev => {
        return {...prev, userName: 'Please add username'};
      });
    }
    if (
      Object.values(form).length === 5 &&
      Object.values(form).every(item => item.trim().length > 0) &&
      Object.values(errors).every(item => !item)
    ) {
      register(form)(authDispath)(response => {
        navigate(LOGIN, {data: response});
      });
    }
  };
  return (
    <TakeLeaveComponent
      onChange={onChange}
      onSubmit={onSubmit}
      form={form}
      errors={errors}
      error={error}
      loading={loading}
    />
  );
};

export default TakeLeave;
