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

// import Colors from '../constants/Colors';

const AuthStackNavigation = createStackNavigator(
  {
    LoginStack: Login,
    RegisterStack: Register,
  },
  {
    initialRouteName: 'RegisterStack',
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
      screen: Results,
      navigationOptions: {
        tabBarLabel: `Beck's Result's`,
        tabBarIcon: ({ tintColor }) => {
          return <Ionicons name="pencil" size={20} color={tintColor} />;
        },
      },
    },
    User: {
      screen: User,
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

const DrawerNav = createDrawerNavigator({
  Home: AwareTabNavigator,
  Results: Results, // You should use another screen.
});

const MainNavigation = createSwitchNavigator({
  HomeDrawer: DrawerNav,
  AuthStack: AuthStackNavigation, // You will use this.props.navigation.replace('HomeDrawer') after login process.
});

const AwareNavigator = createAppContainer(MainNavigation);

export default AwareNavigator;

// const AuthNavigator = createStackNavigator(
//   {
//     // Login: {
//     //   screen: Login,
//     //   navigationOptions: {
//     //     headerShown: false,
//     //   },
//     // },
//     // Register: {
//     //   screen: Register,
//     //   navigationOptions: {
//     //     headerShown: false,
//     //   },
//     // },
//     Home: {
//       screen: Home,
//       navigationOptions: {
//         headerTitle: () => (
//           <View
//             style={{
//               flex: 1,
//               flexDirection: 'row',
//               justifyContent: 'center',
//               alignItems: 'center',
//               overflow: 'hidden',
//               marginBottom: 20,
//             }}
//           >
//             <Image
//               style={{
//                 width: '50%',
//                 shadowColor: 'black',
//                 shadowOffset: { width: 1, height: 3 },
//                 shadowRadius: 8,
//                 shadowOpacity: 0.28,
//                 height: '100%',
//               }}
//               source={require('../assets/aware-nobg.png')}
//             />
//           </View>
//         ),

//         headerTransparent: true,
//       },
//     },
//   },
//   { initialRouteName: 'Home' }

//   // { mode: 'modal' }
// );

// const HomeNavigator = createDrawerNavigator(
//   {
//     User: User,
//   },
//   {
//     contentOptions: {
//       activeTintColor: 'blue',
//       labelStyle: {
//         fontFamily: 'open-sans-bold',
//       },
//     },
//   }
// );

// const MainNavigator = createSwitchNavigator({
//   HomeDrawer: HomeNavigator,
//   AuthStack: AuthNavigator,
// });

// const AwareNavigator = createAppContainer({ MainNavigator });

// export default AwareNavigator;
