import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Container from '../../components/common/Container/index';
import {useNavigation} from '@react-navigation/native';
import Icon from '../../components/common/Icon';

const Home = () => {
  const {setOptions, toggleDrawer} = useNavigation();
  React.useEffect(() => {}, []);
  setOptions({
    headerLeft: () => (
      <TouchableOpacity
        onPress={() => {
          toggleDrawer();
        }}>
        <Icon type="material" style={{padding: 10}} size={25} name="menu" />
      </TouchableOpacity>
    ),
  });
  return (
    <Container>
      <Text>Hi from Contacts</Text>
    </Container>
  );
};
export default Home;
