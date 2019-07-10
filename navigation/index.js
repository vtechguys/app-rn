import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Init from '../screens/InitScreen';
import Welcome from '../screens/WelcomeScreen';
// import SignIn from '../screens/SignInScreen';
// import SignUp from '../screens/SignUpScreen';
// import Forgot from '../screens/ForgotScreen';


import MainTabNavigator from "./MainTabNavigator";

const screens = createSwitchNavigator({

    Init,
    Welcome,
    // SignIn,
    // SignUp,
    // Forgot,
    Main: MainTabNavigator
}, {
        defaultNavigationOptions: {
            // headerStyle: {
            //   height: theme.sizes.base * 4,
            //   backgroundColor: theme.colors.white, // or 'white
            //   borderBottomColor: "transparent",
            //   elevation: 0, // for android
            // },
            // headerBackImage: <Image source={require('../assets/icons/back.png')} />,
            // headerBackTitle: null,
            // headerLeftContainerStyle: {
            //   alignItems: 'center',
            //   marginLeft: theme.sizes.base * 2,
            //   paddingRight: theme.sizes.base,
            // },
            // headerRightContainerStyle: {
            //   alignItems: 'center',
            //   paddingRight: theme.sizes.base,
            // },
        }
    });

export default createAppContainer(screens);