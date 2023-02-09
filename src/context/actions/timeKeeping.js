import {
  TIMEKEEPING_FAIL,
  TIMEKEEPING_START,
  TIMEKEEPING_SUCCESS,
} from '../../constants/actionTypes';
import axiosInstance from '../../helpers/axiosInterceptor';
export default ({
    userId,
    ipUser,
    latitudeUser,
    longitudeUser,
    attendanceTime,
    attendanceType,
  }) =>
  dispath => {
    dispath({
      type: TIMEKEEPING_START,
    });
    axiosInstance
      .post('/mywork/timekeepingInsert', {
        userId,
        latitudeUser,
        longitudeUser,
        ipUser,
        attendanceTime,
        attendanceType,
      })
      .then(res => {
        console.log(res);
        dispath({
          type: TIMEKEEPING_SUCCESS,
          payload: res.data,
        });
      })
      .catch(err => {
        console.log(err);
        dispath({
          type: TIMEKEEPING_FAIL,
          payload: err.response ? err.response.data : {err: 'Some thing'},
        });
      });
  };
