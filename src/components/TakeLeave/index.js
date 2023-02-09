import React, {useState} from 'react';
import Container from '../common/Container';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {LOGIN} from '../../constants/routeNames';
import Message from '../common/Message';

const TakeLeaveComponent = ({
  onSubmit,
  form,
  loading,
  error,
  onChange,
  errors,
}) => {
  const {navigate} = useNavigation();
  const [isSecureTextEntry, setSecureTextEntry] = useState(true);
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
          label="Firt Name"
          iconPosition="right"
          placeholder="Enter Firt Name"
          onChangeText={value => {
            onChange({name: 'firstName', value});
          }}
          error={errors.firstName || error?.first_name?.[0]}
        />
        <Input
          label=""
          iconPosition="right"
          placeholder="Enter Last Name"
          error={errors.lastName || error?.last_name?.[0]}
          onChangeText={value => {
            onChange({name: 'lastName', value});
          }}
        />
        <Input
          label="Email"
          iconPosition="right"
          placeholder="Enter Email"
          error={errors.email || error?.email?.[0]}
          onChangeText={value => {
            onChange({name: 'email', value});
          }}
        />
        <Input
          label="Username"
          iconPosition="right"
          placeholder="Enter Username"
          error={errors.userName || error?.username?.[0]}
          onChangeText={value => {
            onChange({name: 'userName', value});
          }}
        />
        <CustomButton
          loading={loading}
          disabled={loading}
          onPress={onSubmit}
          primary
          title="Submit"
        />
      </SafeAreaView>
    </Container>
  );
};

export default TakeLeaveComponent;
