import React, {useState} from 'react';
import Container from '../common/Container';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import Message from '../common/Message';
import CustomDatePicker from './datepicker';

const TakeLeaveComponent = ({
  onSubmit,
  form,
  loading,
  error,
  onChange,
  errors,
}) => {
  const {navigate} = useNavigation();
  return (
    <Container>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />
      <SafeAreaView style={styles.form}>
        {error?.error && (
          <Message retry danger retryFn={onSubmit} message={error?.error} />
        )}
        <Input
          label="Nhập họ tên"
          iconPosition="right"
          placeholder="Enter Firt Name"
          onChangeText={value => {
            onChange({name: 'firstName', value});
          }}
          error={errors.firstName || error?.first_name?.[0]}
        />
        <Input
          label="Lý do xin nghỉ"
          iconPosition="right"
          placeholder="Enter Last Name"
          error={errors.lastName || error?.last_name?.[0]}
          onChangeText={value => {
            onChange({name: 'lastName', value});
          }}
        />
        <Input
          label="Người được trình"
          iconPosition="right"
          placeholder="Enter Email"
          error={errors.email || error?.email?.[0]}
          onChangeText={value => {
            onChange({name: 'email', value});
          }}
        />
        <Text>Chọn thời gian xin nghỉ phép</Text>
        <CustomDatePicker
          textStyle={{
            paddingVertical: 15,
            paddingHorizontal: 10,
            borderColor: 'gray',
            borderWidth: 1,
          }}
        />
        <CustomButton
          loading={loading}
          disabled={loading}
          onPress={onSubmit}
          primary
          title="Gửi"
        />
      </SafeAreaView>
    </Container>
  );
};

export default TakeLeaveComponent;
