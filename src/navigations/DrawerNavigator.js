import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import {HOME_NAVIGATIOR} from '../constants/routeNames';
import SideMenu from './SideMenu';

const getDrawerContent = navigation => {
  return <SideMenu navigation={navigation} />;
};
const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerType="slide"
      drawerContent={({navigation}) => getDrawerContent(navigation)}>
      <Drawer.Screen
        name={HOME_NAVIGATIOR}
        component={HomeNavigator}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
