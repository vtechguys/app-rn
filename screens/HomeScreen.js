import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Button,
  AsyncStorage,
  Dimensions,

} from 'react-native';

import { Block, Text, Card, Divider } from "../UI";
const {width, height } = Dimensions.get("window");

import { MonoText } from '../components/StyledText';


import { appConstants, theme } from "../constants";

import { Pedometer } from 'expo-sensors';

import Expo from "expo";


class Step extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isPedometerAvailable: "checking",
      pastStepCount: 0,
      currentStepCount: 0,
      totalStepCount: 0,
      levelWidth: 0,

    };
  }
  componentDidMount= async()=>{
    this._subscribe();
    const stepCount = await AsyncStorage.getItem("STEP_COUNT");

  }
}





export default class HomeScreen extends React.Component {

  state = {
    isPedometerAvailable: "checking",
    pastStepCount: 0,
    currentStepCount: 0,
    totalStepCount: 0,
    levelWidth: 0,
    maxWidth: 300
  };

  componentDidMount = async () => {
    this._subscribe();
    const pastStepCount = await AsyncStorage.getItem("TOTAL_STEPS");
    if (pastStepCount > 0) {
      this.setState({
        pastStepCount,
        totalStepCount: pastStepCount
      })
    }
  }

  componentWillUnmount (){
    this._unsubscribe();
   
  }

  _subscribe = async () => {
    this._subscription = Pedometer.watchStepCount(result => {
      this.setState(prevState=>{
        console.log("_subscribe",result, this.state);
        return {
          currentStepCount: result.steps,
          totalStepCount: result.steps

        };
      });
      AsyncStorage.setItem("TOTAL_STEPS", result.steps.toString());
    });

    Pedometer.isAvailableAsync().then(
      result => {
        this.setState({
          isPedometerAvailable: String(result),

        });
      },
      error => {
        this.setState({
          isPedometerAvailable: "Could not get isPedometerAvailable: " + error
        });
      }
    );

    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 1);
    Pedometer.getStepCountAsync(start, end).then(
      result => {
        console.log("step",result, this.state);
        this.setState(prevState => { 
          return {
            totalStepCount: result.steps,
            // levelWidth: result.steps
          };
          
        });
      AsyncStorage.setItem("TOTAL_STEPS", result.steps.toString());
      },
      error => {
        this.setState({
          pastStepCount: "Could not get stepCount: " + error
        });
      }
    );
  };

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };

  render() {
    let { maxWidth,levelWidth, totalStepCount } = this.state;
    let pedometerAvailableJSX = (
      <>
        {/* <Text primary body bold>Past Step {this.state.pastStepCount}</Text> */}
        {/* <Text primary body bold>Current Step {this.state.currentStepCount}</Text> */}
        <View style = { { height: theme.sizes.radius,
             margin: theme.sizes.base / 2,
             padding: 0,
              borderBottomColor: theme.colors.gray, 
              width: maxWidth, 
              borderBottomWidth: StyleSheet.hairlineWidth * 10

              } }>
          <View style = { { 
            height: theme.sizes.radius * 1.2, 
            margin: 0,
            width: totalStepCount, 
            borderBottomColor: theme.colors.primary,
            borderBottomWidth: StyleSheet.hairlineWidth * 10,
            position: "relative",
            top: - 1,
            left: 0,
            zIndex: 100
            // elevation: 2
 
            } }/>
        </View>
        <Card center middle shadow style={styles.card}>
          {/* <Text medium height={20}></Text> */}
          <Text primary h1 bold >{this.state.totalStepCount}</Text>
        </Card>
      </>
    );
    let noPedometerAvialableJSX = <Text primary h2 bold>No pedoemter avialabel</Text>;
    return (
      <Block center middle flex={1} column>
        <Block center style={{ backgroundColor: "black", width: "60%", height: "70%", borderWidth: 5, borderColor: "black"   }}>
          <Image source={require("../assets/images/appAnimation.gif")} style={{ width: "100%", height: "100%" }} />
        </Block>
        <Block center style={{ width: "100%", height: "30%",  borderWidth: 5, borderColor: "black"  }}>
          {
            this.state.isPedometerAvailable
              ?
              pedometerAvailableJSX
              :
              noPedometerAvialableJSX

          }
        </Block>
      </Block>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },



  container: {
    flex: 1,
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center"
  },









  card:{
    // this should be dynamic based on screen width
    minWidth: (width - (theme.sizes.padding * 2.4) - theme.sizes.base) / 2,
    maxWidth: (width - (theme.sizes.padding * 2.4) - theme.sizes.base) / 2,
    maxHeight: (width - (theme.sizes.padding * 2.4) - theme.sizes.base) / 2,
    borderRadius:  (width - (theme.sizes.padding * 2.4) - theme.sizes.base) / 4
  }
});
