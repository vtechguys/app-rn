import React from 'react';
import {
    StyleSheet,
    View,
    AsyncStorage,
    Dimensions,

} from 'react-native';

import {  Text, Card } from "../UI";
const { width } = Dimensions.get("window");



import { theme } from "../constants";

import { Pedometer } from 'expo-sensors';

function goalLevelReachedConverter(MAX_STEP_LIMIT, MAX_LEVEL_WIDTH, levelNow) {
    console.log(MAX_LEVEL_WIDTH, typeof MAX_LEVEL_WIDTH === "number");
    console.log(MAX_LEVEL_WIDTH, typeof MAX_LEVEL_WIDTH === "number");
    console.log(levelNow, typeof levelNow === "number");

    const CONVERSION_FACTOR = (+ MAX_LEVEL_WIDTH) / (+ MAX_STEP_LIMIT);
    const con = levelNow * CONVERSION_FACTOR;
    return (+ con);
}

export default class Steps extends React.Component {

    state = {
        isPedometerAvailable: "checking",
        pastStepCount: 0,
        currentStepCount: 0,
        totalStepCount: 0,
        levelWidth: 0,
        maxWidth: 250,
        MAX_STEP_LIMIT: 1500
    };

    componentDidMount = async () => {
        this._subscribe();
        const pastStepCount = + (await AsyncStorage.getItem("TOTAL_STEPS"));
        if (pastStepCount > 0) {
            this.setState({
                pastStepCount,
                totalStepCount: pastStepCount
            })
        }
    }

    componentWillUnmount() {
        this._unsubscribe();

    }

    _subscribe = async () => {
        this._subscription = Pedometer.watchStepCount(result => {
            this.setState(prevState => {
                // console.log("_subscribe", result, this.state);
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
                // console.log("step", result, this.state);
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
        console.log("Render Steps");
        let { maxWidth, totalStepCount, MAX_STEP_LIMIT } = this.state;
        let pedometerAvailableJSX = (
            <>
                {/* <Text primary body bold>Past Step {this.state.pastStepCount}</Text> */}
                {/* <Text primary body bold>Current Step {this.state.currentStepCount}</Text> */}
                <View style={{ width: "100%", alignItems: "center", justifyContent: "space-evenly", flexDirection: "row", paddingLeft: 10, paddingRight: 10 }}>
                    <Text primary bold color="black" >{totalStepCount}</Text>

                    <View style={{
                        height: theme.sizes.radius,
                        margin: theme.sizes.base / 2,
                        padding: 0,
                        borderBottomColor: theme.colors.gray,
                        width: maxWidth || 0,
                        borderBottomWidth: StyleSheet.hairlineWidth * 10

                    }}>
                        <View style={{
                            height: theme.sizes.radius * 1.2,
                            margin: 0,
                            width: goalLevelReachedConverter(MAX_STEP_LIMIT, maxWidth, totalStepCount) || 0,
                            borderBottomColor: theme.colors.primary,
                            borderBottomWidth: StyleSheet.hairlineWidth * 10,
                            position: "relative",
                            top: - 1,
                            left: 0,
                            zIndex: 100
                            // elevation: 2

                        }} />
                    </View>
                    <Text primary bold color="black" >{this.state.MAX_STEP_LIMIT}</Text>

                </View>
                <Card center middle shadow style={styles.card}>
                    <Text primary h1 bold >{this.state.totalStepCount}</Text>
                </Card>
            </>
        );
        let noPedometerAvialableJSX = <Text primary h2 bold>No pedoemter avialabel</Text>;
        return (

            <>
                {
                    this.state.isPedometerAvailable
                        ?
                        pedometerAvailableJSX
                        :
                        noPedometerAvialableJSX

                }
            </>

        );
    }

}

const styles = StyleSheet.create({
    card: {
        // this should be dynamic based on screen width
        minWidth: (width - (theme.sizes.padding * 2.4) - theme.sizes.base) / 2,
        maxWidth: (width - (theme.sizes.padding * 2.4) - theme.sizes.base) / 2,
        maxHeight: (width - (theme.sizes.padding * 2.4) - theme.sizes.base) / 2,
        borderRadius: (width - (theme.sizes.padding * 2.4) - theme.sizes.base) / 4
    }
});
