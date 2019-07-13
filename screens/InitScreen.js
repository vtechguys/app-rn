import React, { Component } from "react";
import {  StyleSheet, AsyncStorage, ActivityIndicator, Image, View } from "react-native";

import { Button, Block, Text,  } from "../UI";

import { theme, appConstants } from "../constants";



function handleError(e){
    console.error(e);
}

class Init extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showTerms: false,
        };
    }

    async componentDidMount(){
        console.log("[InitScreen.js] componendDidMount")
        const { navigation } = this.props;

        try{
            // await AsyncStorage.clear();
            const token = await AsyncStorage.getItem(appConstants.USER_TOKEN);
            if(!token){
                navigation.navigate("Welcome");
            }
            else{
                navigation.navigate("Home");
            }
        }
        catch(e){
            handleError();
        }
    }
    render() {
    //     return(<View style = { { width: 100, height: 150, borderColor: "black", borderBottomWidth: 5, borderTopWidth: 5, borderRightWidth: 5, borderLeftWidth: 5 } }>
    //     <Image source={require("../assets/images/appAnimation.gif")} width="100%" height="100%" style={{width: "100%", height: "100%"}}/>
  
    //   </View>);





        return (
            <Block center middle padding = { [ 0, 0 , 60 ] } flex={1}>
                <Image source = { require("../assets/icon.png") } style={styles.icon}/>
            </Block>
        );
    }

}


export default Init;


const styles = StyleSheet.create({
    icon: {
        width: theme.sizes.padding * 6,
        height: theme.sizes.padding * 6,
    },
    
});