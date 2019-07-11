import React from "react";
import { View, Animated, StyleSheet } from "react-native";


import { theme } from "../constants";

/* css design arrtibutes margin*/
function marginDesign(margin) {
    let marginObj = null;
    if (typeof margin === "number") {
        marginObj = {
            marginTop: margin,
            marginRight: margin,
            marginBottom: margin,
            marginLeft: margin
        };
    }

    if (typeof margin === "object") {
        const marginSize = Object.keys(margin).length;
        switch (marginSize) {
            case 1:
                marginObj = {
                    marginTop: margin[0],
                    marginRight: margin[0],
                    marginBottom: margin[0],
                    marginLeft: margin[0],
                };
                break;
            case 2:
                marginObj = {
                    marginTop: margin[0],
                    marginRight: margin[1],
                    marginBottom: margin[0],
                    marginLeft: margin[1],
                };
                break;
            case 3:
                marginObj = {
                    marginTop: margin[0],
                    marginRight: margin[1],
                    marginBottom: margin[2],
                    marginLeft: margin[1],
                };
                break;
            case 4:
                marginObj = {
                    marginTop: margin[0],
                    marginRight: margin[1],
                    marginBottom: margin[2],
                    marginLeft: margin[3],
                };
                break;
            default:
                marginObj = {
                    marginTop: margin[0],
                    marginRight: margin[1],
                    marginBottom: margin[2],
                    marginLeft: margin[3],
                };
        }
    }

    return marginObj;
}
/* css design arrtibutes padding */
function paddingDesign(padding) {
    let paddingObj = null;
    if (typeof padding === 'number') {
        paddingObj = {
            paddingTop: padding,
            paddingRight: padding,
            paddingBottom: padding,
            paddingLeft: padding,
        };
    }

    if (typeof padding === 'object') {
        const paddingSize = Object.keys(padding).length;
        switch (paddingSize) {
            case 1:
                paddingObj = {
                    paddingTop: padding[0],
                    paddingRight: padding[0],
                    paddingBottom: padding[0],
                    paddingLeft: padding[0],
                };
                break;
            case 2:
                paddingObj = {
                    paddingTop: padding[0],
                    paddingRight: padding[1],
                    paddingBottom: padding[0],
                    paddingLeft: padding[1],
                };
                break;
            case 3:
                paddingObj = {
                    paddingTop: padding[0],
                    paddingRight: padding[1],
                    paddingBottom: padding[2],
                    paddingLeft: padding[1],
                };
                break;
            default:
                paddingObj = {
                    paddingTop: padding[0],
                    paddingRight: padding[1],
                    paddingBottom: padding[2],
                    paddingLeft: padding[3],
                }
        }
    }
    return paddingObj;
}
function Block(props) {
    const {
        flex,
        row,
        column,
        center,
        middle,
        left,
        right,
        top,
        bottom,
        card,
        shadow,
        color,
        space,
        padding,
        margin,
        animated,
        wrap,
        style,
        children,
        ...extraProps
    } = props;

    const blockStyle = [
        styles.block,
        flex && { flex },
        flex === false && { flex: 0 }, // reset 
        row && styles.row,
        column && styles.column,
        center && styles.center,
        column && styles.column,
        center && styles.center,
        middle && styles.middle,
        left && styles.left,
        right && styles.right,
        top && styles.top,
        bottom && styles.bottom,
        margin && { ...marginDesign(margin) },
        padding && { ...paddingDesign(padding) },
        card && styles.card,
        shadow && styles.shadow,
        space && { justifyContent: `space-${space}` },
        wrap && { flexWrap: 'wrap' },
        color && styles[color], // predefined styles colors for backgroundColor
        color && !styles[color] && { backgroundColor: color }, // custom backgroundColor
        style, // external styles
    ];

    let blockJSX = (
        <View style = { blockStyle } { ...extraProps }>
            { children }
        </View>
    );
    if(animated){
        blockJSX = (
            <Animated.View style = { blockStyle } { ...extraProps }>
                { children }
            </Animated.View>
        ); 
    }

    return blockJSX;


}
export default Block;
const styles = StyleSheet.create({
    block: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
    },
    column: {
        flexDirection: 'column',
    },
    card: {
        borderRadius: theme.sizes.radius,
    },
    center: {
        alignItems: 'center',
    },
    middle: {
        justifyContent: 'center',
    },
    left: {
        justifyContent: 'flex-start',
    },
    right: {
        justifyContent: 'flex-end',
    },
    top: {
        justifyContent: 'flex-start',
    },
    bottom: {
        justifyContent: 'flex-end',
    },
    shadow: {
        shadowColor: theme.colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 13,
        elevation: 2,
    },
    accent: {
        backgroundColor: theme.colors.accent,
    },
    primary: {
        backgroundColor: theme.colors.primary,
    },
    secondary: {
        backgroundColor: theme.colors.secondary,
    },
    tertiary: {
        backgroundColor: theme.colors.tertiary,
    },
    black: {
        backgroundColor: theme.colors.black,
    },
    white: {
        backgroundColor: theme.colors.white,
    },
    gray: {
        backgroundColor: theme.colors.gray,
    },
    gray2: {
        backgroundColor: theme.colors.gray2,
    },
});