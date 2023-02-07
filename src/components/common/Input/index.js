import {View, Text, TextInput} from 'react-native';
import React from 'react';
import styles from './styles';
import color from '../../../assets/theme/colors';
import colors from '../../../assets/theme/colors';

const Input = ({
  style,
  onChangeText,
  iconPosition,
  icon,
  value,
  label,
  error,
  ...props
}) => {
  const [focused, setFocused] = React.useState(false);
  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'left') {
        return 'row';
      } else if (iconPosition === 'right') {
        return 'row-reverse';
      }
    }
  };
  const getBorderColor = () => {
    if (error) {
      return color.danger;
    }
    if (focused) {
      return colors.primary;
    } else {
      return color.grey;
    }
  };
  return (
    <View style={styles.inputContainer}>
      {label && <Text>{label}</Text>}
      <View
        style={[
          styles.wrapper,
          {alignItems: icon ? 'center' : 'baseline'},
          {borderColor: getBorderColor(), flexDirection: getFlexDirection()},
        ]}>
        <View>{icon && icon}</View>
        <TextInput
          style={[styles.textInput, style]}
          onChangeText={onChangeText}
          value={value}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
          {...props}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;
