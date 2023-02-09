import AsyncStorage from '@react-native-async-storage/async-storage';
import {LOGIN_FAIL} from '../../../constants/actionTypes';
import {LOGIN_START, LOGIN_SUCCESS} from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axiosInterceptor';
export default ({password, userName}) =>
  dispath => {
    dispath({
      type: LOGIN_START,
    });
    axiosInstance
      .post('/login', {
        password,
        userName,
      })
      .then(res => {
        AsyncStorage.setItem('token', res.data.data.token);
        AsyncStorage.setItem('user', res.data.data.name);
        AsyncStorage.setItem('userId', JSON.stringify(res.data.data.id));
        dispath({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });
      })
      .catch(err => {
        console.log('err', err);
        dispath({
          type: LOGIN_FAIL,
          payload: err.response ? err.response.data : {err: 'Some thing'},
        });
      });
  };
