import {
    createDrawerNavigator
} from "react-navigation";
import { Dimensions } from "react-native";
import DashboardStackNavigator from "./AppDrawerStackNavigator";
import DrawerScreen from "../screens/SettingsScreen";


const { width } = Dimensions.get("window");


const AppDrawerNavigator = createDrawerNavigator({
    Dashboard: {
        screen: DashboardStackNavigator
    }
}, {
    contentComponent: DrawerScreen,
    drawerWidth: width * 0.8
});

export default AppDrawerNavigator;