import React, {useContext, useState} from 'react';
import LoginComponent from '../../components/Login';
import loginUser from '../../context/actions/auth/loginUser';
import {GlobalContext} from '../../context/Provider';

const Login = () => {
  const {
    authDispath,
    authState: {error, loading},
  } = useContext(GlobalContext);
  const [form, setForm] = useState({});

  const onSubmit = () => {
    if (form.userName && form.password) {
      console.log('221312');
      loginUser(form)(authDispath);
    }
  };

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
  };
  return (
    <LoginComponent
      onChange={onChange}
      onSubmit={onSubmit}
      form={form}
      error={error}
      loading={loading}
    />
  );
};
export default Login;
