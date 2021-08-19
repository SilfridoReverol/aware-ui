import React from 'react';
import { Image, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { Ionicons } from '@expo/vector-icons';

import Login from '../screens/Login';
import Register from '../screens/Register';
import Home from '../screens/Home';
import Anamnesis from '../screens/Anamnesis';
import Becks from '../screens/Becks';
import User from '../screens/User';
import Results from '../screens/Results';
import DetailedResult from '../screens/DetailedResult';

// import Colors from '../constants/Colors';

const AuthStackNavigation = createStackNavigator(
  {
    LoginStack: {
      screen: Login,
      navigationOptions: {
        headerShown: false,
      },
    },
    RegisterStack: {
      screen: Register,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'LoginStack',
  }
);

const HomeStack = createStackNavigator({
  // For header options
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: () => (
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'visible',
          }}
        >
          <Image
            style={{
              width: '50%',
              shadowColor: 'black',
              shadowOffset: { width: 1, height: 3 },
              shadowRadius: 8,
              shadowOpacity: 0.28,
              height: '50%',
            }}
            source={require('../assets/aware-nobg.png')}
          />
        </View>
      ),

      headerTransparent: true,
    },
  },
  Anamnesis: {
    screen: Anamnesis,
    navigationOptions: {
      headerTitle: () => (
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'visible',
          }}
        >
          <Image
            style={{
              width: '80%',
              shadowColor: 'black',
              shadowOffset: { width: 1, height: 3 },
              shadowRadius: 8,
              shadowOpacity: 0.22,
              height: '65%',
            }}
            source={require('../assets/anamnesis-nobg.png')}
          />
        </View>
      ),

      headerTransparent: true,
      headerTintColor: 'white',
    },
  },
  Becks: {
    screen: Becks,
    navigationOptions: {
      headerTitle: () => (
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'visible',
          }}
        >
          <Image
            style={{
              width: '60%',
              shadowColor: 'black',
              shadowOffset: { width: 1, height: 3 },
              shadowRadius: 10,
              borderRadius: 2,
              shadowOpacity: 0.22,
              height: '70%',
            }}
            source={require('../assets/becks-nobg.png')}
          />
        </View>
      ),
      headerTintColor: 'white',
      headerTransparent: true,
    },
  },
});

const ResultsStack = createStackNavigator({
  // For header options
  Results: {
    screen: Results,
    navigationOptions: {
      headerTransparent: true,
    },
  },
  ResultDetail: {
    screen: DetailedResult,
    navigationOptions: {
      headerTransparent: true,
    },
  },
});

const UserStack = createStackNavigator({
  User: {
    screen: User,
    navigationOptions: {
      headerTransparent: true,
    },
  },
});

const AwareTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => {
          return <Ionicons name="home" size={20} color={tintColor} />;
        },
      },
    },
    Results: {
      screen: ResultsStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => {
          return <Ionicons name="list" size={20} color={tintColor} />;
        },
      },
    },
    User: {
      screen: UserStack,
      navigationOptions: {
        tabBarLabel: 'User',
        tabBarIcon: ({ tintColor }) => {
          return <Ionicons name="person" size={20} color={tintColor} />;
        },
      },
    },
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: 'transparent',
        borderRadius: 20,
        position: 'absolute',
        left: 0,

        borderTopColor: 'rgba(255, 255, 255, 0.65)',

        right: 0,
        overflow: 'visible',
      },
      tabStyle: {
        borderColor: 'rgba(255, 255, 255, 0.65)',
        borderRightWidth: 0.5,
      },
      activeTintColor: 'black',
    },
  }
);

const MainNavigation = createSwitchNavigator({
  // AuthStack: AuthStackNavigation,
  HomeScreen: AwareTabNavigator,
});

const AwareNavigator = createAppContainer(MainNavigation);

export default AwareNavigator;
