import {View, Text, TextInput, ActivityIndicator} from 'react-native';
import React from 'react';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../../../assets/theme/colors';

const Message = ({
  message,
  retry,
  retryFn,
  onDismiss,
  primary,
  danger,
  success,
  info,
  onPress,
  ...props
}) => {
  const [useDismissed, setDismissed] = React.useState(false);
  const getBgColor = () => {
    if (primary) {
      return colors.primary;
    }
    if (danger) {
      return colors.danger;
    }
    if (success) {
      return colors.success;
    }
    if (info) {
      return colors.secondary;
    }
  };
  return (
    <>
      {useDismissed ? null : (
        <TouchableOpacity
          onPress={onPress}
          style={[styles.wrapper, {backgroundColor: getBgColor()}]}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: colors.white}}>{message}</Text>
            {retry && !typeof onDismiss === 'function' && (
              <TouchableOpacity onPress={retryFn}>
                <Text style={{color: colors.white}}>Retry</Text>
              </TouchableOpacity>
            )}
            {typeof onDismiss === 'function' && (
              <TouchableOpacity
                onPress={() => {
                  setDismissed(true);
                  onDismiss();
                }}>
                <Text style={{color: colors.white}}>X</Text>
              </TouchableOpacity>
            )}
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Message;
