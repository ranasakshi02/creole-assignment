import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Dashboard/HomeScreen';
import History from '../screens/Dashboard/History';

const NavContainer = () => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const PatientTabNav = () => {

    return (
      <Tab.Navigator
        initialRouteName={'Home'}
        screenOptions={{
          showLabel: false,
          style: {
            height: 100,
            backgroundColor:"#fff",
            borderTopColor: 'transparent',
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerStyle: {
              backgroundColor: Colors.Primary,
            },
            headerShown: false,
            title: '',
            // headerTitle: 'Reminders',
            // tabBarIcon: ({focused}) => {
            //   return (
            //     <Tabicon
            //       focused={focused}
            //       unfocusedSvg={Reminder}
            //       focusedSvg={ReminderFill}
            //       label="Reminders"
            //     />
            //   );
            // },
          }}
        />

        <Tab.Screen
          name="History"
          component={History}
          options={{
            headerStyle: {
              backgroundColor: Colors.Primary,
            },
            headerShown: false,
            title: '',
            headerTitle: 'History',
            tabBarIcon: ({focused}) => {
              return (
                <Tabicon
                  focused={focused}
                  unfocusedSvg={Appointment}
                  focusedSvg={AppointmentFill}
                  label="Appointments"
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Home"
          component={PatientDashBoard}
          options={{
            headerShown: false,
            title: '',
            tabBarIcon: ({focused}) => {
              return (
                <Tabicon
                  focused={focused}
                  unfocusedSvg={Home}
                  focusedSvg={HomeFill}
                  label="Home"
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Message"
          component={MessageScreen}
          options={{
            tabBarBadge: notificationCount !== 0 ? notificationCount : null,
            tabBarBadgeStyle: {backgroundColor: Colors.Alert},
            headerShown: true,
            headerStyle: {
              backgroundColor: Colors.Primary,
            },

            title: '',
            headerTitle: 'Message',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontFamily: 'Lato-Bold',
              fontSize: 16,
              textAlign: 'center',
              color: Colors.White,
            },
            tabBarIcon: ({focused}) => {
              return (
                <Tabicon
                  focused={focused}
                  unfocusedSvg={Message}
                  focusedSvg={MessageFill}
                  label="Message"
                />
              );
            },
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
      <Stack.Screen component={HomeScreen} name="Home" />
      {/* <Stack.Screen
        component={RestaurantList}
        name="RestaurantList"
        options={{
          headerShown: true,
          headerTitle: 'RestaurantList',
          headerStyle: {backgroundColor: '#00C247'},
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 16,
            fontWeight: '600',
          },
          headerBackImage: () => (
            <View style={{marginStart: 15}}>
              <Text style={{color:'#fff',fontSize:15,fontWeight:'500'}}>Back</Text>
            </View>
          ),
          headerBackTitle: '',
        }}
      />
     <Stack.Screen
        component={RestaurantDetails}
        name="RestaurantDetails"
        options={{
          headerShown: true,
          headerTitle: 'RestaurantDetails',
          headerStyle: {backgroundColor: '#00C247'},
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 16,
            fontWeight: '600',
          },
          headerBackImage: () => (
            <View style={{marginStart: 15}}>
            <Text style={{color:'#fff',fontSize:15,fontWeight:'500'}}>Back</Text>
          </View>
          ),
          headerBackTitle: '',
        }}
      /> */}
    </Stack.Navigator>
  );
};

export default NavContainer;
