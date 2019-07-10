import React, { Component } from "react";
import {  StyleSheet, AsyncStorage, ActivityIndicator, Image } from "react-native";

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