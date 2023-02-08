import React, {useState} from 'react';
import Container from '../common/Container';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {LOGIN} from '../../constants/routeNames';
import Message from '../common/Message';

const RegisterComponent = ({
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
      <View>
        <Text style={styles.title}>Welcome to My Company</Text>
        <Text style={styles.subTitle}>Create account</Text>
      </View>
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
          label="Last Name"
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
        <Input
          label="Password"
          secureTextEntry={isSecureTextEntry}
          icon={
            <TouchableOpacity
              onPress={() => {
                setSecureTextEntry(prev => !prev);
              }}>
              <Text>{isSecureTextEntry ? 'Show' : 'Hide'}</Text>
            </TouchableOpacity>
          }
          placeholder="Enter Password"
          iconPosition="right"
          error={errors.password || error?.password?.[0]}
          onChangeText={value => {
            onChange({name: 'password', value});
          }}
        />
        <CustomButton
          loading={loading}
          disabled={loading}
          onPress={onSubmit}
          primary
          title="Submit"
        />
        <View style={styles.createSection}>
          <Text style={styles.infoText}>Already account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigate(LOGIN);
            }}>
            <Text style={styles.linkBtn}>Login</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Container>
  );
};

export default RegisterComponent;
