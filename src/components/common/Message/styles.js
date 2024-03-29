import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';

export default StyleSheet.create({
  wrapper: {
    height: 42,
    paddingHorizontal: 5,
    paddingVertical: 13,
    borderRadius: 4,
    marginVertical: 5,
    // alignItems: 'center',
    // justifyContent: 'space-evenly',
  },
  textInput: {
    flex: 1,
    width: '100%',
  },
  loaderSection: {
    flexDirection: 'row',
  },
  error: {
    color: colors.danger,
    paddingTop: 4,
    fontSize: 12,
  },
});
