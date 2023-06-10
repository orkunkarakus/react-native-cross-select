import React, { FunctionComponent } from 'react';
import { ColorValue, StyleSheet, View } from 'react-native';

const DEFAULT_SIZE = 10;
const DEFAULT_COLOR = 'black';

type Props = {
  /**
   * @default 10
   */
  size?:number;
    /**
   * @default black
   */
  color?:ColorValue;
}

const ArrowDownIcon:FunctionComponent<Props> = ({ size = DEFAULT_SIZE, color = DEFAULT_COLOR }) => (
  <View style={[styles.container, { width: size, height: size }]}>
    <View style={[styles.chevron, {
      width: size,
      height: size,
      borderBottomColor: color,
      borderLeftColor: color,
      top: -(size / 4)
    }]}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  chevron: {
    borderBottomWidth: 1.5,
    borderLeftWidth: 1.5,
    transform: [{ rotate: '-45deg' }]
  }
});

ArrowDownIcon.displayName = 'ArrowDownIcon';
export default ArrowDownIcon;
