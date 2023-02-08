import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Container from '../../components/common/Container/index';
import {useNavigation} from '@react-navigation/native';

const Contacts = () => {
  const {setOptions, toggleDrawer} = useNavigation();
  React.useEffect(() => {}, []);
  setOptions({
    headerLeft: () => (
      <TouchableOpacity
        onPress={() => {
          toggleDrawer();
        }}>
        <Text style={{padding: 10}}>NAV</Text>
      </TouchableOpacity>
    ),
  });
  return (
    <Container>
      <Text>Hi from Contacts</Text>
    </Container>
  );
};
export default Contacts;
