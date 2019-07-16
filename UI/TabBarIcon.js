import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { theme } from '../constants';

export default function TabBarIcon(props) {
  let size = props.focused ? theme.sizes.base * 1.8 : theme.sizes.base * 1.5;
  return (
    <Ionicons
      name={props.name}
      size={size}
      style={{ marginBottom: -3 }}
      color={props.focused ? theme.colors.primary : theme.colors.gray2}
    />
  );
}
