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
          label="Người đề nghị"
          iconPosition="right"
          placeholder="Nhập tên người đề nghị"
          onChangeText={value => {
            onChange({name: 'nguoi_de_nghi', value});
          }}
          error={errors.nguoi_de_nghi || error?.nguoi_de_nghi?.[0]}
        />
        <Input
          label="Phòng ban"
          iconPosition="right"
          placeholder="Nhập Phòng ban"
          error={errors.phong_ban || error?.phong_ban?.[0]}
          onChangeText={value => {
            onChange({name: 'phong_ban', value});
          }}
        />
        <Input
          label="Lý do"
          iconPosition="right"
          placeholder="Xin mời điền lý do"
          error={errors.ly_do || error?.ly_do?.[0]}
          onChangeText={value => {
            onChange({name: 'ly_do', value});
          }}
        />
        <Input
          label="Chức vụ"
          iconPosition="right"
          placeholder="Xin mời điền Chức vụ"
          error={errors.chuc_vu || error?.chuc_vu?.[0]}
          onChangeText={value => {
            onChange({name: 'chuc_vu', value});
          }}
        />
        <Text>Ngày nghỉ</Text>
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
