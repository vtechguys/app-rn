import React from 'react';
import { Platform, Text, View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import * as Icon from "@expo/vector-icons";
import { theme } from "../constants";

// experiment

const InsideScreen =(props) =>(<View>
  <Text>OtherScreen</Text>
</View>);

// 



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
          size={theme.sizes.base * 2.5}
        />

      ),
      headerTitle: "Home",
      showIcon: true,
      tabBarOptions: {
        showIcon: true
      },
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
  }
};
const HomeStack = createStackNavigator(
  {
    Home: configHome,
    InnerScreen: InsideScreen
  },
  config
);
HomeScreen.navigationOptions = {
  // ...HomeScreen.navigationOptions,
  
  tabBarLabel: 'Home',
  showIcon: true,
  tabBarOptions: {
    showIcon: true
  },  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
    // <Icon.Ionicons
    //   style={{ paddingLeft: theme.sizes.padding }}
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
          size={theme.sizes.base * 2.5}
        />

      ),
      headerTitle: "Links",
      tabBarLabel: 'Links',
      showIcon: true,
      tabBarOptions: {
        showIcon: true
      },
      tabBarLabel: "Links",
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

const LinksStack = createStackNavigator(
  {
    Links: configLinks,
  },
  config
);
LinksScreen.navigationOptions = {
  ...LinksScreen.navigationOptions,
  showIcon: true,
  tabBarOptions: {
    showIcon: true
  },
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
          size={theme.sizes.base * 2.5}
        />

      ),
      headerTitle: "Links",
      tabBarLabel: 'Links',
      tabBarOptions: {
        showIcon: true,

      },

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
  tabBarOptions: {
    showIcon: true
  },
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
    tabBarOptions: {
      showIcon: true,

    },
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        header: null,
        headerTitle: routeName
      };
    }
  });

export default tabNavigator;
