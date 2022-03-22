/**
 * @format
 */

import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';

import Button from './Button';
import Graph from './Graph';
import {COLORS} from '../../Theme/Colors';
const window = Dimensions.get('window');

const RollerComponent = ({maxResult, results, onRollDices, onClear}) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button title="1x" onPress={() => onRollDices(1)} />
        <Button title="10x" onPress={() => onRollDices(10)} />
        <Button title="100x" onPress={() => onRollDices(100)} />
        <Button title="1000x" onPress={() => onRollDices(1000)} />
        <Button title="Clear" onPress={onClear} />
      </View>
      <Graph results={results} maxResult={maxResult} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: COLORS.text.primary,
    margin: 10,
  },
  buttonsContainer: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default RollerComponent;
