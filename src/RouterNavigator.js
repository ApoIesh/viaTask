import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import News from './component/News';
import Home from './component/Home';
import NewsDetails from './component/NewsDetails';
import Settings from './component/Settings';
import { Secondary_color } from './component/Assets/style/styles';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabComponent() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconNamee;
          if (route.name === 'News') {
            iconNamee = focused ? 'newspaper' : 'newspaper';
          } else if (route.name === 'Settings') {
            iconNamee = focused ? 'settings' : 'settings';
          }
          return <Ionicons name={iconNamee} size={size} color={color} />;
        },
        tabBarActiveTintColor: Secondary_color,
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name={'News'}
        component={News}
        options={{
          headerShown: false,
        }}
      />

      <Tab.Screen
        name={'Settings'}
        component={Settings}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default function RouterNavigator() {
  return (
    <Stack.Navigator
      // initialRouteName="News"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="TabComponent" component={TabComponent} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="NewsDetails" component={NewsDetails} />
    </Stack.Navigator>
  );
}
