import {
  SafeAreaView,
  Image,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import Container from '../../components/common/Container';
import styles from './styles';
import {CONTACT_DETAIL, SETTINGS} from '../../constants/routeNames';
import logoutUser from '../../context/actions/auth/logoutUser';

const SideMenu = ({navigation, authDispath}) => {
  const handleLogout = () => {
    navigation.toggleDrawer();
    Alert.alert('Logout!', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
        onPress: () => {},
      },
      {
        text: 'OK',
        onPress: () => {
          logoutUser()(authDispath);
        },
      },
    ]);
  };
  const menuItems = [
    {
      icon: <Text>T</Text>,
      name: 'Setting',
      onPress: () => {
        navigation.navigate(SETTINGS);
      },
    },
    {
      icon: <Text>T</Text>,
      name: 'Xin nghỉ phép',
      onPress: () => {
        navigation.navigate(CONTACT_DETAIL);
      },
    },
    {
      icon: <Text>T</Text>,
      name: 'Logout',
      onPress: handleLogout,
    },
  ];
  return (
    <SafeAreaView>
      <Container>
        <Image
          height={70}
          width={70}
          source={require('../../assets/images/logo.png')}
          style={styles.logoImage}
        />
        <View style={{paddingHorizontal: 70}}>
          {menuItems.map(({name, icon, onPress}) => (
            <TouchableOpacity onPress={onPress} key={name} style={styles.item}>
              {icon}
              <Text style={styles.itemText}>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default SideMenu;
