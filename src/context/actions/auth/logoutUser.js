import AsyncStorage from '@react-native-async-storage/async-storage';
import {LOGOUT_USER} from '../../../constants/actionTypes';
export default () => dispath => {
  AsyncStorage.removeItem('token');
  AsyncStorage.removeItem('user');
  dispath({
    type: LOGOUT_USER,
  });
};
