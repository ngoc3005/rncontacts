import {useRoute} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import LoginComponent from '../../components/Login';
import loginUser from '../../context/actions/auth/loginUser';
import {GlobalContext} from '../../context/Provider';

const Login = () => {
  const {
    authDispath,
    authState: {error, loading},
  } = useContext(GlobalContext);
  const [form, setForm] = useState({});
  const [justSignedUp, setjustSignedUp] = useState(false);
  const {params} = useRoute();

  React.useEffect(() => {
    if (params?.data) {
      setjustSignedUp(true);
      setForm({...form, userName: params.data.username});
    }
  }, [params]);

  const onSubmit = () => {
    if (form.userName && form.password) {
      loginUser(form)(authDispath);
    }
  };

  const onChange = ({name, value}) => {
    setjustSignedUp(false);
    setForm({...form, [name]: value});
  };
  return (
    <LoginComponent
      onChange={onChange}
      onSubmit={onSubmit}
      form={form}
      error={error}
      loading={loading}
      justSignedUp={justSignedUp}
    />
  );
};
export default Login;
