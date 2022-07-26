import React from 'react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';

import {styles} from './assets/AppStyles';
import Navigation from './navigation/Index';
import {store, persistor} from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <StatusBar barStyle="dark-content" />
        <Navigation style={styles.container} />
      </PersistGate>
    </Provider>
  );
}
