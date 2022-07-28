/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
} from 'react-native';
import { StoreProvider, stores } from './src/store';

import { Provider as PaperProvider } from 'react-native-paper';
import createRootNavigator from './src/navigation/Nav';


const Layout = createRootNavigator;

class App extends Component {
  render() {
    return (
      <StoreProvider>
        <PaperProvider>
        <SafeAreaView style={styles.container}>
          <Layout auth={stores.auth}/>
        </SafeAreaView>
        </PaperProvider>
      </StoreProvider>
    );
  };
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});

export default App;
