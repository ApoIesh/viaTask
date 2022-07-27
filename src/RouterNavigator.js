import React from 'react';
import { Appearance } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import News from './component/News';
import NewsDetails from './component/NewsDetails';
import Settings from './component/Settings';
import {
  black_color,
  Secondary_color,
  white_color,
} from './component/Assets/style/styles';
import { L } from './Config';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const colorScheme = Appearance.getColorScheme();

function TabComponent() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconNamee;
          if (route.name === L('news')) {
            iconNamee = focused ? 'newspaper' : 'newspaper';
          } else if (route.name === L('settings')) {
            iconNamee = focused ? 'settings' : 'settings';
          }
          return <Ionicons name={iconNamee} size={size} color={color} />;
        },
        tabBarActiveTintColor: Secondary_color,
        tabBarInactiveTintColor: 'gray',
        tabBarActiveBackgroundColor:
          colorScheme === 'light' ? white_color : black_color,
        tabBarInactiveBackgroundColor:
          colorScheme === 'light' ? white_color : black_color,
      })}>
      <Tab.Screen
        name={L('news')}
        component={News}
        options={{
          headerShown: false,
        }}
      />

      <Tab.Screen
        name={L('settings')}
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
      <Stack.Screen name="NewsDetails" component={NewsDetails} />
    </Stack.Navigator>
  );
}
