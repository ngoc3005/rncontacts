import {REGISTER_FAIL} from '../../constants/actionTypes';
import {LOGIN_START} from '../../constants/actionTypes';
import {LOGIN_FAIL} from '../../constants/actionTypes';
import {LOGIN_SUCCESS} from '../../constants/actionTypes';
import {CLEAR_AUTH_STATE} from '../../constants/actionTypes';
import {REGISTER_SUCCESS} from '../../constants/actionTypes';
import {REGISTER_LOADING} from '../../constants/actionTypes';

const auth = (state, {type, payload}) => {
  switch (type) {
    case LOGIN_START:

    case REGISTER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        isLoggedIn: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        isLoggedIn: true,
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case CLEAR_AUTH_STATE:
      return {
        ...state,
        loading: false,
        data: null,
        error: null,
      };
    default:
      return state;
  }
};

export default auth;
