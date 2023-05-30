import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
// eslint-disable-next-line import/no-unresolved
import Select, { ISelect, MultipleSelect } from 'react-native-select';

const MOCK_DATA = Array(20).fill(0).map((_item, _index) => ({
  value: _index + 1,
  label: `Item ${_index + 1}`
}));

const App = () => {
  const handleChange:ISelect.Select.SelectOnSelectProp = (data) => {
    // eslint-disable-next-line no-console
    console.log('Data: ', data);
  };

  const handleMultipleChange:ISelect.Select.MultipleSelectOnSelectProp = (data) => {
    // eslint-disable-next-line no-console
    console.log('Datas: ', data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Single Select</Text>
        <Select data={MOCK_DATA} onSelect={handleChange} />
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>Multiple Select</Text>
        <MultipleSelect data={MOCK_DATA} onSelect={handleMultipleChange} />
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>Searchable Single Select</Text>
        <Select data={MOCK_DATA} onSelect={handleChange} searchable />
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>Searchable Multiple Select</Text>
        <MultipleSelect data={MOCK_DATA} onSelect={handleMultipleChange} searchable />
      </View>
    </View>
  );
};

App.displayName = 'App';
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  box: {
    marginVertical: 15
  },
  text: {
    marginBottom: 10,
    textAlign: 'center'
  }
});
