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
import {SETTINGS, TAKELEAVE, TIMEKEEPING} from '../../constants/routeNames';
import logoutUser from '../../context/actions/auth/logoutUser';
import Icon from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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
      icon: <Icon size={17} name="player-settings" />,
      name: 'Setting',
      onPress: () => {
        navigation.navigate(SETTINGS);
      },
    },
    {
      icon: <MaterialIcons size={17} name="schedule-send" />,
      name: 'Xin nghỉ phép',
      onPress: () => {
        navigation.navigate(TAKELEAVE);
      },
    },
    {
      icon: <Icon size={17} name="calendar" />,
      name: 'Chấm công',
      onPress: () => {
        navigation.navigate(TIMEKEEPING);
      },
    },
    {
      icon: <MaterialIcons size={17} name="logout" />,
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
        <View style={{paddingHorizontal: 50}}>
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
