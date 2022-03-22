/**
 * @format
 */

import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {COLORS} from '../../Theme/Colors';

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={[styles.text]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 5,
    backgroundColor: COLORS.roller.button,
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
  },
});

export default Button;
