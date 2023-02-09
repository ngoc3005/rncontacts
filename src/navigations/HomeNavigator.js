import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HOME, SETTINGS, TAKELEAVE, TIMEKEEPING} from '../constants/routeNames';
import Setting from '../screens/Settings';
import Home from '../screens/Home';
import TakeLeave from '../screens/TakeLeave';
import TimeKeeping from '../screens/TimeKeeping';

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator initialRouteName={HOME}>
      <HomeStack.Screen name={HOME} component={Home} />
      <HomeStack.Screen name={TAKELEAVE} component={TakeLeave} />
      <HomeStack.Screen name={TIMEKEEPING} component={TimeKeeping} />
      <HomeStack.Screen name={SETTINGS} component={Setting} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
