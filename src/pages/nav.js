import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import LoginScreen from './LoginScreen'
import ProfileScreen from './ProfileScreen'
import SignUpScreen from './SignUpScreen'

const Stack = createStackNavigator();

const Nav = () => {
    return (
    <NavigationContainer>
      <Stack.Navigator intitalRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />  
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    )
}

export default Nav;