import {DEV_BACKEND_URL, PROD_BACKEND_URL} from '@env';

const devEnvironmentVarriables = {
  BACKEND_URL: DEV_BACKEND_URL,
};
const prodEnvironmentVarriables = {
  BACKEND_URL: PROD_BACKEND_URL,
};

export default __DEV__ ? devEnvironmentVarriables : prodEnvironmentVarriables;
