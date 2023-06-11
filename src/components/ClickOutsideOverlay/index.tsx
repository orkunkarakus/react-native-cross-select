import {
  StyleSheet, TouchableWithoutFeedback, View, useWindowDimensions
} from 'react-native';
import React, { memo } from 'react';
import type {
  ClickOutsideOverlay
  as ClickOutsideOverlayType
} from '../../types/clickOutsideOverlay';

const ClickOutsideOverlay:ClickOutsideOverlayType = memo(({ onClick }) => {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={[styles.container, { width: windowWidth, height: windowHeight }]} />
    </TouchableWithoutFeedback>
  );
});

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: 'transparent',
    top: 0,
    botom: 0,
    left: 0,
    right: 0
  }
});

ClickOutsideOverlay.displayName = 'ClickOutsideOverlay';
export default ClickOutsideOverlay;
