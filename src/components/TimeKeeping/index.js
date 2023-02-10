import React, {useState} from 'react';
import Container from '../../components/common/Container';
import Input from '../../components/common/Input';
import CustomButton from '../../components/common/CustomButton';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import Message from '../common/Message';

const TimeKeepingComponent = ({error, justSignedUp, loading, onSubmit}) => {
  const {navigate} = useNavigation();
  
  return (
    <Container>
      <Image
        height={70}
        width={70}
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />
      <SafeAreaView style={styles.form}>
        {justSignedUp && (
          <Message
            success
            onDismiss={() => {}}
            message="Account created successfully"
          />
        )}
        {error && !error.error && (
          <Message danger onDismiss={() => {}} message="invalid credentials" />
        )}
        {error?.error && <Message danger onDismiss message={error?.error} />}
        
        
        <CustomButton
          disabled={loading}
          onPress={onSubmit}
          loading={loading}
          primary
          title="Điểm danh"
        />
      </SafeAreaView>
    </Container>
  );
};

export default TimeKeepingComponent;
