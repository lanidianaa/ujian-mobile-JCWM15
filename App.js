import React, { Fragment, useEffect } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { NavigationContainer } from '@react-navigation/native';
import reducer from './src/redux/reducer';
import Main from './src/navigation/Main';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import { StatusBar } from 'react-native';

const store = configureStore({ reducer, devTools: true });

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Fragment>
      <StatusBar backgroundColor="#ff5e78" barStyle="dark-content" />
      <SafeAreaProvider>
        <NavigationContainer>
          <Provider store={store}>
            <Main />
          </Provider>
        </NavigationContainer>
      </SafeAreaProvider>
    </Fragment>
  );
}
 
export default App;