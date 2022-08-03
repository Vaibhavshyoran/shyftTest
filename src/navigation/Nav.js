import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { observer } from 'mobx-react';
import { useStore } from '../store';

import Main from '../screens/Main';
import Search from '../screens/Search';
import Profile from '../screens/Profile';
import Loan from '../screens/Loan';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabsComponent = () => (
  <Tab.Navigator
    tabBarPosition="bottom"
    screenOptions={({ route }) => ({
      unmountOnBlur:true,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = focused
            ? 'calculator'
            : 'calculator';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'calculator' : 'calculator';
        }else if (route.name === 'Search') {
          iconName = focused ? 'calculator' : 'calculator';
        }
        else if (route.name === 'Loan') {
          iconName = focused ? 'calculator' : 'calculator';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}
   
    >
    <Tab.Screen name="Home" component={Main} options={{ headerShown: false }}/>
    <Tab.Screen name="Search" component={Search} options={{ headerShown: false }}/>
    <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
    <Tab.Screen name="Loan" component={Loan} options={{ headerShown: false }}/>
  </Tab.Navigator>
);

const ProtectedRoutes = [
  { name: 'Tabs', component: TabsComponent },
]
const UnProtectedRoutes = [
  // { name: 'Login', component: Login },
]


const createRootNavigator = observer(({ auth }) => {
  const isLoggedIn = auth?.isAuthenticated;
  console.log('tt', isLoggedIn);
  
  return (
    <NavigationContainer
     >
      <Stack.Navigator>
        {isLoggedIn ? ProtectedRoutes.map(item => (
          <Stack.Screen
            key={item.name}
            name={item.name}
            component={item.component}
            options={{ headerShown: false }}
          />
        )) :
          UnProtectedRoutes.map(item => (
            <Stack.Screen
              key={item.name}
              name={item.name}
              component={item.component}
              options={{ headerShown: false }}
            />
          ))}

      </Stack.Navigator>
    </NavigationContainer>
  )
});

export default createRootNavigator;
