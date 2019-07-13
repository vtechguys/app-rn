import React from 'react';
import { StyleSheet, View } from 'react-native';

import Block from './Block';
import { theme } from '../constants';

export default function Divider(props){
  
    const { color, style, children,  ...extraProps } = props;
    const dividerStyles = [
      styles.divider,
      style,
    ];

    return (
      <View
        // color={color || theme.colors.gray2}
        style={dividerStyles}
        {...extraProps}
      >
        { children }
      </View>
    )
  
}
const styles = StyleSheet.create({
  divider: {
    height: 0,
    margin: theme.sizes.base / 2,
    borderBottomColor: theme.colors.gray,
    borderBottomWidth: StyleSheet.hairlineWidth *2,
  }
})
