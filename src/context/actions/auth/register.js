import {REGISTER_FAIL} from '../../../constants/actionTypes';
import {
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  CLEAR_AUTH_STATE,
} from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axiosInterceptor';
export const clearAuthState = () => dispath => {
  dispath({
    type: CLEAR_AUTH_STATE,
  });
};

export default ({
    email,
    password,
    userName: username,
    firstName: first_name,
    lastName: last_name,
  }) =>
  dispath =>
  onSuccess => {
    dispath({
      type: REGISTER_LOADING,
    });
    axiosInstance
      .post('auth/register', {
        email,
        password,
        username,
        first_name,
        last_name,
      })
      .then(res => {
        dispath({
          type: REGISTER_SUCCESS,
          payload: res.data,
        });
        onSuccess(res.data);
      })
      .catch(err => {
        console.log('err', err);
        dispath({
          type: REGISTER_FAIL,
          payload: err.response ? err.response.data : {err: 'Some thing'},
        });
      });
  };
