import * as AppAuth  from 'expo-app-auth';
import * as Constants from 'expo-constants';
import * as GoogleSignIn  from 'expo-google-sign-in';
// import * as Gs from "expo-google-sign-in";

import React, { Component } from 'react'
import { ActivityIndicator, Keyboard, KeyboardAvoidingView, StyleSheet, Platform, AsyncStorage } from 'react-native'

import { Button, Block, Input, Text, GoogleSignInButton, Divider } from '../UI';
import { theme } from '../constants';
import { ScrollView } from 'react-native-gesture-handler';

const VALID_EMAIL = "aniketjha898@gmail.com";
const VALID_PASSWORD = "Aniket@123";

import { Google } from "expo";

var firebaseConfig = {
  apiKey: "AIzaSyDbguXnPyyb6bi9Cu3qYfTk_PAdYCG1yJA",
  authDomain: "appskeleton-550b7.firebaseapp.com",
  databaseURL: "https://appskeleton-550b7.firebaseio.com",
  projectId: "appskeleton-550b7",
  storageBucket: "",
  messagingSenderId: "521553643049",
  appId: "1:521553643049:web:eb1a249f1eb41961"
};
import { appConstants } from "../constants";

// import firebase from "firebase";



// firebase.initializeApp(firebaseConfig);





// const isInClient = Constants.appOwnership === 'expo';
// if (isInClient) {
//   GoogleSignIn.allowInClient();
// }
const clientIdForUseInTheExpoClient = "";
// '603386649315-vp4revvrcgrcjme51ebuhbkbspl048l9.apps.googleusercontent.com';


const yourClientIdForUseInStandalone = Platform.select({
  android:
    '521553643049-g81vack4asaj5j2v49v0599i650fvkoh.apps.googleusercontent.com',
  ios:
    '521553643049-c628a93bu2eidorq1aij20ctlco16kt2.apps.googleusercontent.com',
});

const clientId = yourClientIdForUseInStandalone;
  // ? clientIdForUseInTheExpoClient

export default class SignInScreen extends Component {
  state = {
    email: VALID_EMAIL,
    password: VALID_PASSWORD,
    errors: [],
    loading: false,
    user: null,
    hasMigrated: false
  }


  // chechIfLogedInGoogle = () => {
  //   firebase.auth().onAuthStateChanged(function(user){
  //     if(user){
  //       this.props.navigation.navigate("Dashboard");
  //       console.log(user);
  //     }
  //     else{

  //     }
  //   });
  // }











  // async componentDidMount() {
  //   // try {
  //   //   await GoogleSignIn.initAsync({
  //   //     // isOfflineEnabled: true,
  //   //     // isPromptEnabled: true,
  //   //     clientId: "521553643049-c628a93bu2eidorq1aij20ctlco16kt2.apps.googleusercontent.com",
  //   //   });
  //   //   this._syncUserWithStateAsync();
  //   // } catch ({ message }) {
  //   //   alert('GoogleSignIn.initAsync(): ' + message);
  //   // }
  // }
  _signOutAsync = async () => {
    try {
      // await GoogleSignIn.disconnectAsync();
      await GoogleSignIn.signOutAsync();
      console.log('Log out successful');
    } catch ({ message }) {
      console.error('Demo: Error: logout: ' + message);
    } finally {
      this.setState({ user: null });
    }
  };

  _signInAsync = async () => {

    // 521553643049-c628a93bu2eidorq1aij20ctlco16kt2.apps.googleusercontent.com

    // 521553643049-g81vack4asaj5j2v49v0599i650fvkoh.apps.googleusercontent.com
    this.setState({ loading: true });

    try {
      const result = await Google.logInAsync({
        androidClientId: "521553643049-3lm5qqitdn4dlhn2mf12agrq11hm4ent.apps.googleusercontent.com",
        iosClientId:'521553643049-c628a93bu2eidorq1aij20ctlco16kt2.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
        behavior: "web"
      });
      
      if (result.type ===  'success') {
        console.log(result);
        
        let user = result.user;
        await this.props.navigation.navigate("Dashboard");

        await AsyncStorage.setItem(appConstants.USER, JSON.stringify(user));
        await AsyncStorage.setItem(appConstants.USER_TOKEN, result.accessToken);
        // this.setState({
        //   loading: false,
        //   hasMigrated: true
        // });
        
      } else {
        console.log(result);
        this.setState({
          loading: false
        });
      }
    } catch (e) {
      console.log(e);
      this.setState({loading: false});    
    }

    // try {
    //   await GoogleSignIn.askForPlayServicesAsync();
    //   const { type, user } = await GoogleSignIn.signInAsync();
    //   console.log({ type, user });
    //   if (type === 'success') {
    //     this._syncUserWithStateAsync();
    //   }
    // } catch ({ message }) {
    //   console.error('login: Error:' + message);
    // }
  };
  _toggleAuth = () => {
    console.log('Toggle', !!this.state.user);
    if (this.state.user) {
      this._signOutAsync();
    } else {
      this._signInAsync();
    }
  };
  _syncUserWithStateAsync = async () => {
    const user = await GoogleSignIn.signInSilentlyAsync();
    console.log('_syncUserWithStateAsync', { user });
    this.setState({ user });
  };

  signOutAsync = async () => {
    try {
      await GoogleSignIn.signOutAsync();
      this.setState({ user: null });
    } catch ({ message }) {
      alert('signOutAsync: ' + message);
    }
  };

  signInAsync = async () => {
    try {
      await GoogleSignIn.askForPlayServicesAsync();
      const { type, user } = await GoogleSignIn.signInAsync();
      if (type === 'success') {
        this._syncUserWithStateAsync();
      }
    } catch ({ message }) {
      alert('login: Error:' + message);
    }
  };

  _syncUserWithStateAsync = async () => {
    /*
      const user = await GoogleSignIn.signInSilentlyAsync();
      this.setState({ user });
    */

    const data = await GoogleSignIn.signInSilentlyAsync();
    console.log({ data });
    if (data) {
      const photoURL = await GoogleSignIn.getPhotoAsync(256);
      const user = await GoogleSignIn.getCurrentUserAsync();
      this.setState({
        user: {
          ...user.toJSON(),
          photoURL: photoURL || user.photoURL,
        },
      });
    } else {
      this.setState({ user: null });
    }
  };

  get buttonTitle() {
    return this.state.user ? 'Sign-Out of Google' : 'Sign-In with Google';
  }


  handleLogin() {
    const { navigation } = this.props;
    const { email, password } = this.state;
    const errors = [];

    Keyboard.dismiss();
    this.setState({ loading: true });

    // check with backend API or with some static data
    if (email !== VALID_EMAIL) {
      errors.push('email');
    }
    if (password !== VALID_PASSWORD) {
      errors.push('password');
    }

    this.setState({ errors, loading: false });

    if (!errors.length) {
      navigation.navigate("Dashboard");
    }
  }

  render() {
    const { navigation } = this.props;
    const { loading, errors, hasMigrated } = this.state;
    const hasErrors = key => errors.includes(key) ? styles.hasErrors : null;

    const scheme = {
      // OAuthRedirect,
      // URLSchemes,
    };

    let signInJSXMain = (
      <KeyboardAvoidingView style={styles.login} behavior="padding">
      <Block padding={[0, theme.sizes.base * 2]} margin={[theme.sizes.base * 2, 0]}>
        <Text h1 bold>Login</Text>
        <Block middle>
          <Input
            label="Email"
            error={hasErrors('email')}
            style={[styles.input, hasErrors('email')]}
            defaultValue={this.state.email}
            onChangeText={text => this.setState({ email: text })}
          />
          <Input
            secure
            label="Password"
            error={hasErrors('password')}
            style={[styles.input, hasErrors('password')]}
            defaultValue={this.state.password}
            onChangeText={text => this.setState({ password: text })}
          />
          <Button onPress={() => navigation.navigate('Forgot')} style={styles.forgotPasswordContainer}>
            <Text gray caption center style={styles.linkToOtherScreen}>
              Forgot your password?
            </Text>
          </Button>
          <Button gradient onPress={() => this.handleLogin()}>
           
              <Text bold white center>SignIn</Text>
            
          </Button>
          <Button onPress={() => navigation.navigate('SignUp')} style={styles.signUpLink}>
            <Text gray caption center style={styles.linkToOtherScreen}>
              SignUp Instead
            </Text>
          </Button>
          
          <Divider />

          <Button gradient onPress={() => this._signInAsync()} >
            
              <Text bold white center>GoogleSignIn Here.</Text>
            
          </Button>
          <Button gradient onPress={() => this.handleLogin()}>
           
              <Text bold white center>FacebookSignIn Here.</Text>
            
          </Button>
          {/* <GoogleSignInButton onPress={this._toggleAuth}>
            {this.buttonTitle}
          </GoogleSignInButton>
          <ScrollView>
              <Text>AppAuth: {this.state.user}</Text>

          </ScrollView> */}
        </Block>
      </Block>
    </KeyboardAvoidingView>
  
  
    );
    let activityIndicatorJSX = (
      <Block style={styles.bg} pointerEvents="none" flex={1}>
        <ActivityIndicator size="large" color="white" style={{ fontSize: theme.sizes.base * 5 }}/> 
      </Block>
    );
    
    return (
  
          <Block>
            { loading === true ? activityIndicatorJSX : signInJSXMain }
          </Block>
      
   
    )
  }
}

const styles = StyleSheet.create({
  bg: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#F5FCFF88"
  },

  login: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent,
  },
  forgotPasswordContainer: {
    height: 15,
    marginVertical: theme.sizes.padding / 10,
    alignSelf: "flex-end"
  },
  signUpLink: {
    marginVertical: theme.sizes.base / 4,
  },
  linkToOtherScreen: {
    textDecorationLine: 'underline'
  },

})
