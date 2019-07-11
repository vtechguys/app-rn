import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import * as Icon from "@expo/vector-icons";
import { theme } from "../constants";
// const config = Platform.select({
//   web: { headerMode: 'screen' },
//   default: {},
// });

const config = {
  defaultNavigationOptions: {
    gesturesEnabled: false
  }
};
const configHome = {
  screen: HomeScreen,
  navigationOptions: ({ navigation }) => {
    return {
      headerLeft: (
        <Icon.Ionicons
          style={{ paddingLeft: theme.sizes.base }}
          onPress={() => navigation.openDrawer()}
          name="md-contact"
          size={ theme.sizes.base * 2.5 }
        />
        
      ),
      headerTitle: "Home",
      tabBarVisible: true
      // tabBarLabel: 'Home',
      // tabBarIcon: ({ focused }) => (
      //   <TabBarIcon
      //     focused={focused}
      //     name={
      //       Platform.OS === 'ios'
      //         ? `ios-information-circle${focused ? '' : '-outline'}`
      //         : 'md-information-circle'
      //     }
      //   />
      //   // <Icon.Ionicons
      //   //   style={{  }}
      //   //   onPress={() => navigation.openDrawer()}
      //   //   name="md-contact"
      //   //   size={ theme.sizes.base  }
      //   // />
      // ),
    };
  }
};
const HomeStack = createStackNavigator(
  {
    Home: configHome
  },
  config
);
HomeScreen.navigationOptions = {
      tabBarLabel: 'Home',
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={
            Platform.OS === 'ios'
              ? `ios-information-circle${focused ? '' : '-outline'}`
              : 'md-information-circle'
          }
        />
        // <Icon.Ionicons
        //   style={{  }}
        //   onPress={() => navigation.openDrawer()}
        //   name="md-contact"
        //   size={ theme.sizes.base  }
        // />
      ),
};
const configLinks = {
  screen: LinksScreen,
  navigationOptions: ({ navigation }) => {
    return {
      headerLeft: (
        <Icon.Ionicons
          style={{ paddingLeft: theme.sizes.base }}
          onPress={() => navigation.openDrawer()}
          name="md-contact"
          size={ theme.sizes.base * 2.5 }
        />
        
      ),
      headerTitle: "Links",
      
    };
  }
};

const LinksStack = createStackNavigator(
  {
    Links: configLinks,
  },
  config
);
LinksScreen.navigationOptions = {
  ...LinksScreen.navigationOptions,
  tabBarLabel: 'Links',
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={
            Platform.OS === 'ios'
              ? `ios-information-circle${focused ? '' : '-outline'}`
              : 'md-information-circle'
          }
        />
      ),
};
const configSettings = {
  screen: LinksScreen,
  navigationOptions: ({ navigation }) => {
    return {
      headerLeft: (
        <Icon.Ionicons
          style={{ paddingLeft: theme.sizes.base }}
          onPress={() => navigation.openDrawer()}
          name="md-contact"
          size={ theme.sizes.base * 2.5 }
        />
        
      ),
      headerTitle: "Links",
      tabBarLabel: 'Links',
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={
            Platform.OS === 'ios'
              ? `ios-information-circle${focused ? '' : '-outline'}`
              : 'md-information-circle'
          }
        />
      ),
    };
  }
};
const SettingsStack = createStackNavigator(
  {
    Settings: configSettings,
  },
  config
);
SettingsScreen.navigationOptions = {
  tabBarLabel: 'Links',
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={
            Platform.OS === 'ios'
              ? `ios-information-circle${focused ? '' : '-outline'}`
              : 'md-information-circle'
          }
        />
      ),
};
const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
}, {

  navigationOptions: ({ navigation }) => {
    const { routeName } = navigation.state.routes[navigation.state.index];
    return {
      header: null,
      headerTitle: routeName
    };
  }
});

export default tabNavigator;
