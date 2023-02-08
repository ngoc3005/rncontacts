import {SafeAreaView, Image, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Container from '../../components/common/Container';
import styles from './styles';
import {CONTACT_DETAIL, SETTINGS} from '../../constants/routeNames';

const SideMenu = ({navigation}) => {
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
      name: 'Tạo đơn',
      onPress: () => {
        navigation.navigate(CONTACT_DETAIL);
      },
    },
    {
      icon: <Text>T</Text>,
      name: 'Logout',
      onPress: () => {},
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
