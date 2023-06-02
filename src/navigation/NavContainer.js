import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Dashboard/HomeScreen';
import History from '../screens/Dashboard/History';
import Setting from '../screens/Dashboard/Setting';
import Profile from '../screens/Dashboard/Profile';
import imgPath from '../../assets/imgPath';
import Login from '../screens/Login';
import Register from '../screens/Register';

const NavContainer = () => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const DashboardTabs = () => {
    return (
      <Tab.Navigator
        initialRouteName={'Home'}
        screenOptions={{
          showLabel: true,
          style: {
            height: 100,
            backgroundColor: "#038B12",
            borderTopColor: 'transparent',
          },
          tabBarActiveTintColor: '#FFF',
          tabBarInactiveTintColor: '#1B1C1E',
          tabBarStyle: {backgroundColor: "#038B12"},
          tabBarLabelStyle: {fontWeight: '700', marginBottom: 5},
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerStyle: {
              backgroundColor: "#038B12",
            },
            headerShown: true,
            title: 'Home',
            headerTitleAlign: 'center',
            headerTitleStyle:{color:'#FFF'},
            tabBarIcon: () => <Image source={imgPath.home} />,
          }}
        />

        <Tab.Screen
          name="History"
          component={History}
          options={{
            headerStyle: {
              backgroundColor: "#038B12",
            },
            headerShown: true,
            title: 'History',
            headerTitle: 'History',
            headerTitleAlign: 'center',headerTitleStyle:{color:'#FFF'},
            tabBarIcon: () => <Image source={imgPath.history} />,
          }}
        />
        <Tab.Screen
          name="Setting"
          component={Setting}
          options={{
            headerStyle: {
              backgroundColor: "#038B12",
            },
            headerShown: true,
            title: 'Setting',
            headerTitleAlign: 'center',headerTitleStyle:{color:'#FFF'},
            tabBarIcon: () => <Image source={imgPath.setting} />,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#038B12",
            },
            title: 'Profile',
            headerTitleAlign: 'center',headerTitleStyle:{color:'#FFF'},
            tabBarIcon: () => <Image source={imgPath.profile} />,
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen component={Login} name="Login" />
      <Stack.Screen component={Register} name="Register" />
      <Stack.Screen component={DashboardTabs} name="Dashboard" />
    </Stack.Navigator>
  );
};

export default NavContainer;
