/**
 * @format
 */

import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';

import Bar from './Bar';
import {COLORS} from '../../Theme/Colors';

const window = Dimensions.get('window');
const graphMaxHeight = window.height / 2.5;

const Graph = ({maxResult, results}) => {
  return (
    <View style={styles.container}>
      {Object.keys(results).map(res => (
        <Bar
          label={res}
          value={results[res]}
          maxResult={maxResult}
          maxValue={results[maxResult]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.roller.background,
    height: graphMaxHeight,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Graph;
