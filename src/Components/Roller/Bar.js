/**
 * @format
 */

import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';

import {COLORS} from '../../Theme/Colors';

const window = Dimensions.get('window');
const graphMaxHeight = window.height / 2.5;
const barMaxHeight = graphMaxHeight - 25;

const getBarStyle = (value, label, maxResult, maxValue) => {
  if (value === 0) {
    return styles.barEmpty;
  }

  if (parseInt(label) === maxResult) {
    return styles.barFull;
  }

  return {height: value * barMaxHeight / maxValue};
};

const Bar = ({label, value, maxResult, maxValue}) => {
  console.log({ maxResult})
  return (
    <View style={styles.container}>
      <View style={[styles.bar, getBarStyle(value, label, maxResult, maxValue)]} />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    width: window.width / 24,
  },
  bar: {
    backgroundColor: COLORS.roller.bar,
  },
  barFull: {
    height: barMaxHeight,
  },
  barEmpty: {
    height: 0,
  },
  label: {
    marginVertical: 2.5,
    textAlign: 'center',
  },
});

export default Bar;
