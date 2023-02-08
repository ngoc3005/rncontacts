import React from 'react';
import Container from '../../components/common/Container';
import Input from '../../components/common/Input';
import CustomButton from '../../components/common/CustomButton';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {REGISTER} from '../../constants/routeNames';
import Message from '../common/Message';

const LoginComponent = ({error, onChange, loading, onSubmit}) => {
  const {navigate} = useNavigation();
  return (
    <Container>
      <Image
        height={70}
        width={70}
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />
      <View>
        <Text style={styles.title}>Welcome to My Company</Text>
        <Text style={styles.subTitle}>Please login here</Text>
      </View>
      <SafeAreaView style={styles.form}>
        {error && !error.error && (
          <Message danger onDismiss={() => {}} message="invalid credentials" />
        )}
        {error?.error && <Message danger onDismiss message={error?.error} />}
        <Input
          label="Username"
          iconPosition="right"
          placeholder="Enter Username"
          autoCapitalize={'none'}
          onChangeText={value => {
            onChange({name: 'userName', value});
          }}
        />
        <Input
          label="Password"
          autoCapitalize={'none'}
          secureTextEntry={true}
          icon={<Text>Show</Text>}
          placeholder="Enter Password"
          iconPosition="right"
          onChangeText={value => {
            onChange({name: 'password', value});
          }}
        />

        <CustomButton
          disabled={loading}
          onPress={onSubmit}
          loading={loading}
          primary
          title="Submit"
        />

        <View style={styles.createSection}>
          <Text style={styles.infoText}>Need a new account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigate(REGISTER);
            }}>
            <Text style={styles.linkBtn}>Register</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Container>
  );
};

export default LoginComponent;
