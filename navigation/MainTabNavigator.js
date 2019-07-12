import React from 'react';
import { Platform, Text, View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import { TabBarIcon } from '../UI';


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
  ...config,
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
      headerTitle: "Activity",
      showIcon: true,
      tabBarOptions: {
        showIcon: true,
        activeTintColor: theme.colors.primary,
        inactiveTintColor: theme.colors.gray2,
        // showLabel: Platform.OS === "ios" ? true : false,
        // showLabel: ( this.activeTintColor === theme.colors.primary ? true: false),

      },
      tabBarLabel: 'Activity',
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name="md-fitness"
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
// const HomeStack = createStackNavigator(
//   {
//     Home: configHome,
//     InnerScreen: InsideScreen
//   },
//   config
// );
// HomeScreen.navigationOptions = {
//   // ...HomeScreen.navigationOptions,
  
//   tabBarLabel: 'Home',
//   showIcon: true,
//   tabBarOptions: {
//     showIcon: true
//   },  tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === 'ios'
//           ? `ios-information-circle${focused ? '' : '-outline'}`
//           : 'md-information-circle'
//       }
//     />
//     // <Icon.Ionicons
//     //   style={{ paddingLeft: theme.sizes.padding }}
//     //   onPress={() => navigation.openDrawer()}
//     //   name="md-contact"
//     //   size={ theme.sizes.base  }
//     // />
//   ),
// };
const configShop = {
  screen: LinksScreen,
  ...config,
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
      headerTitle: "Shop",
      tabBarLabel: 'Shop',
      showIcon: true,
      tabBarOptions: {
        showIcon: true,
        activeTintColor: theme.colors.primary,
        inactiveTintColor: theme.colors.gray2,
        // showLabel: Platform.OS === "ios" ? true : false,
        // showLabel: ( this.activeTintColor === theme.colors.primary ? true: false),

      },
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name="md-cart"
        />
      ),
    };
  }
};

// const LinksStack = createStackNavigator(
//   {
//     Links: configLinks,
//   },
//   config
// );
// LinksScreen.navigationOptions = {
//   ...LinksScreen.navigationOptions,
//   showIcon: true,
//   tabBarOptions: {
//     showIcon: true
//   },
//   tabBarLabel: 'Links',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === 'ios'
//           ? `ios-information-circle${focused ? '' : '-outline'}`
//           : 'md-information-circle'
//       }
//     />
//   ),
// };














// const configSettings = {
//   screen: LinksScreen,
//   ...config,

//   navigationOptions: ({ navigation }) => {
//     return {
//       headerLeft: (
//         <Icon.Ionicons
//           style={{ paddingLeft: theme.sizes.base }}
//           onPress={() => navigation.openDrawer()}
//           name="md-contact"
//           size={theme.sizes.base * 2.5}
//         />

//       ),
//       headerTitle: "Links",
//       tabBarLabel: "Links",
//       tabBarOptions: {
//         showIcon: true,
//         activeTintColor: theme.colors.primary,
//         inactiveTintColor: theme.colors.gray2,
//         // showLabel: Platform.OS === "ios" ? true : false,

//         // showLabel: ( this.activeTintColor === theme.colors.primary ? true: false),

//       },

//       tabBarIcon: ({ focused }) => {
//         return (
//         <TabBarIcon
//           focused={focused}
//           name={
//             Platform.OS === 'ios'
//               ? `ios-information-circle${focused ? '' : '-outline'}`
//               : 'md-information-circle'
//           }
//         />
//       )},
//     };
//   }
// };

// const SettingsStack = createStackNavigator(
//   {
//     Settings: configSettings,
//   },
//   config
// );
// SettingsScreen.navigationOptions = {
//   tabBarLabel: 'Links',
//   tabBarOptions: {
//     showIcon: true
//   },
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === 'ios'
//           ? `ios-information-circle${focused ? '' : '-outline'}`
//           : 'md-information-circle'
//       }
//     />
//   ),
// };














const configPlay = {
  screen: SettingsScreen,
  ...config,

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
      headerTitle: "Play",
      tabBarLabel: "Play",
      // tabBarLabel: ({ focused })=>{
      //   return focused === true ?  <Text>Settings</Text>: null;
      // },
      tabBarOptions: {
        showIcon: true,
        activeTintColor: theme.colors.primary,
        inactiveTintColor: theme.colors.gray2,
        // showLabel: Platform.OS === "ios" ? true : false,

        // showLabel: ( this.activeTintColor === theme.colors.primary ? true: false),

      },

      tabBarIcon: ({ focused }) => {
        return (
        <TabBarIcon
          focused={focused}
          name="md-trophy"
        
        />
      )},
    };
  }
};


const configSocial = {
  screen: SettingsScreen,
  ...config,

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
      headerTitle: "Social",
      tabBarLabel: "Social",
      tabBarOptions: {
        showIcon: true,
        activeTintColor: theme.colors.primary,
        inactiveTintColor: theme.colors.gray2,
        // showLabel: Platform.OS === "ios" ? true : false,

        // showLabel: ( this.activeTintColor === theme.colors.primary ? true: false),

      },

      tabBarIcon: ({ focused }) => {
        return (
        <TabBarIcon
          focused={focused}
          name='md-people'
          
        
        />
      )},
    };
  }
};
























const tabNavigator = createBottomTabNavigator({
  Home: configHome,
  Shop: configShop,
  // Settings: configSettings,
  Play: configPlay,
  Social: configSocial
}, {
    // tabBarOptions: {
    //   showIcon: true,
    //   activeTintColor: theme.colors.primary,
    //   inactiveTintColor: theme.colors.gray2,

    // },
    ...config,

    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        // header: null,
        headerTitle: routeName
      };
    }
  });

export default tabNavigator;
