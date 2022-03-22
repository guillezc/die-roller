/**
 * @format
 */

import React, {useState, useCallback} from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';

import {getDiceNumber, getMaxKeyNumber} from '../../Utils/getDiceNumber';
import {mockResults} from '../../Utils/mocks';
import RollerComponent from '../../Components/Roller';

const Roller = () => {
  const [maxResult, setMaxResult] = useState(null);
  const [results, setResults] = useState(mockResults);

  const handleRollDices = useCallback(
    rollTimes => {
      const _results = {...results};

      for (let i = 0; i < rollTimes; i++) {
        const _firstDice = getDiceNumber();
        const _secondtDice = getDiceNumber();
        const _sum = _firstDice + _secondtDice;
        
        _results[_sum] = _results[_sum] + 1;

        setMaxResult(getMaxKeyNumber(_results));
        setResults(_results);
      }
    },
    [results],
  );

  const handleClear = useCallback(() => {
    setResults(mockResults);
  }, []);

  return (
    <SafeAreaView>
      <Text style={styles.title}>Die Roller</Text>
      <RollerComponent
        onClear={handleClear}
        onRollDices={handleRollDices}
        results={results}
        maxResult={maxResult}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default Roller;
