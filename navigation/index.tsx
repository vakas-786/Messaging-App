import { NavigationContainer, DefaultTheme, DarkTheme, BaseRouter } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {Octicons, MaterialCommunityIcons, MaterialIcons, FontAwesome5} from '@expo/vector-icons'
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './MainTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import * as Color from '../constants/Colors' 
import { View } from 'react-native';
import ChatRoomScreen from '../screens/ChatRoomScreen'
import ContactsScreen from '../screens/ContactsScreen'
import NewsScreen from '../screens/NewsScreen';
import ArticleScreen from '../screens/ArticleScreen';
import {Auth} from 'aws-amplify';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  const logOut = async () => {
    await Auth.signOut()
     .then(data => console.log(data))
     .catch(err => console.log(err));
  }
  
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: Color.default.light.tint,
        shadowOpacity:  0,
        elevation: 0,
      },
      headerTintColor: Color.default.light.background,
      headerTitleAlign: 'left',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }}>
      <Stack.Screen name="Root" component={BottomTabNavigator}
      options={{ 
        title: "CryptoChat",
        headerRight: () => (
          <View style={{
            flexDirection: 'row',
            width: 60,
            justifyContent: 'space-between',
            marginRight: 10
            }}>
            <Octicons name='search' size ={24} color={'white'}/>
            <MaterialCommunityIcons onPress={logOut} name='dots-vertical' size={22} color={'white'}/>
          </View>
        )
      }} />
      
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoomScreen}
        options={({ route })  => ({
          title: route.params.name,
          headerRight: () => (
            <View style={{
              flexDirection: 'row',
              width: 100,
              justifyContent: 'space-between',
              marginRight: 10,
            }}>
              <FontAwesome5 name="video" size={22} color={'white'} />
              <MaterialIcons name="call" size={22} color={'white'} />
              <MaterialCommunityIcons name="dots-vertical" size={22} color={'white'} />
            </View>
          )
        })}
      />
      <Stack.Screen name="Contacts"
       component={ContactsScreen} 
       />

      <Stack.Screen name="Article"
       component={ArticleScreen} 
       options={({ route })  => ({
        title: route.params.article.source.name,
        headerRight: () => (
          <View style={{
            flexDirection: 'row',
            width: 100,
            justifyContent: 'space-between',
            marginRight: 10,
          }}>
          </View>
          )
        })}
        />

      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
