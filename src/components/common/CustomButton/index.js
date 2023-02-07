import {View, Text, TextInput, ActivityIndicator} from 'react-native';
import React from 'react';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../../../assets/theme/colors';

const CustomButton = ({
  title,
  secondary,
  primary,
  danger,
  onPress,
  disabled,
  loading,
  ...props
}) => {
  const getBgColor = () => {
    if (disabled) {
      return colors.grey;
    }
    if (primary) {
      return colors.primary;
    }
    if (danger) {
      return colors.danger;
    }
    if (secondary) {
      return colors.secondary;
    }
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.wrapper, {backgroundColor: getBgColor()}]}>
      <View style={styles.loaderSection}>
        {loading && (
          <ActivityIndicator
            color={primary ? colors.primary : colors.secondary}
          />
        )}
        {title && (
          <Text
            style={{
              color: disabled ? 'black' : colors.white,
              paddingLeft: loading ? 5 : 0,
            }}>
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
