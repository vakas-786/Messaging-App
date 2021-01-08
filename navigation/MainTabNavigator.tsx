import { createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'

import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import {Fontisto} from '@expo/vector-icons'
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ChatScreen from '../screens/ChatScreen';
import TabTwoScreen from '../screens/NewsScreen';
import { MainTabParamList, TabOneParamList, TabTwoParamList, TabThreeParamList } from '../types';
import NewsScreen from '../screens/NewsScreen';
import CryptoScreen from '../screens/CryptoScreen';

const MainTab = createMaterialTopTabNavigator<MainTabParamList>();

export default function MainTabNavigator() {
  const colorScheme = useColorScheme();
   //custom hook that helps switch from day and night mode
  return (
    <MainTab.Navigator
      initialRouteName="Chats"
      tabBarOptions={{
         activeTintColor: Colors[colorScheme].background,
         style: {
           backgroundColor: Colors[colorScheme].tint,
         },
         labelStyle: {
           fontWeight: 'bold'
         },
         showIcon: true,
         
      }}>
      <MainTab.Screen
        name="Crypto"
        component={CryptoScreen}
        options={{
          tabBarIcon: ({ color }) => <Fontisto name="line-chart" color={color} size={18} />,
          tabBarLabel: () => null
        }}
      />
      <MainTab.Screen
        name="Chats"
        component={ChatScreen}
      />

      <MainTab.Screen
        name="News"
        component={NewsScreen}
      />
    </MainTab.Navigator>

    
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/


// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="ChatScreen"
        component={ChatScreen}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="NewsScreen"
        component={NewsScreen}
        options={{ headerTitle: 'News' }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<TabThreeParamList>();


function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="CryptoScreen"
        component={CryptoScreen}
        options={{ headerTitle: 'Crypto' }}
      />
    </TabThreeStack.Navigator>
  );
}