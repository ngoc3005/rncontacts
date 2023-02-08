import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import {HOME_NAVIGATIOR} from '../constants/routeNames';
import SideMenu from './SideMenu';
import {GlobalContext} from '../context/Provider';

const getDrawerContent = (navigation, authDispath) => {
  return <SideMenu navigation={navigation} authDispath={authDispath} />;
};
const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  const {authDispath} = React.useContext(GlobalContext);
  return (
    <Drawer.Navigator
      drawerType="slide"
      drawerContent={({navigation}) =>
        getDrawerContent(navigation, authDispath)
      }>
      <Drawer.Screen
        name={HOME_NAVIGATIOR}
        component={HomeNavigator}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
