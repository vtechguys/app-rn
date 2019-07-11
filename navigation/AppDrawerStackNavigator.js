import React from "react";
import { createStackNavigator } from "react-navigation";
import DashboardMainTabNavigator from "./MainTabNavigator"
import * as Icon from "@expo/vector-icons";

import { theme } from "../constants";

const AppDashboardStackNavigator  = createStackNavigator({
    DashboardMainTabNavigator: DashboardMainTabNavigator
},  
{
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon.Ionicons
            style={{ paddingLeft: theme.sizes.base }}
            onPress={() => navigation.openDrawer()}
            name="md-contact"
            size={ theme.sizes.base * 2.5 }
          />
        )
      };
    }
  }
  );
export default AppDashboardStackNavigator;