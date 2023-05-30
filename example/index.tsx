import { AppRegistry } from 'react-native';
// eslint-disable-next-line import/no-unresolved
import { SelectProvider } from 'react-native-cross-select';
import React from 'react';
import App from './src/App';

const Index = () => (
  <SelectProvider>
    <App />
  </SelectProvider>
);

Index.displayName = 'Index';

AppRegistry.registerComponent('main', () => Index);
