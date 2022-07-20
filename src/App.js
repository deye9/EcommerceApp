import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {store, persistor} from './redux/store';
import Navigation from './navigation/Index';
import {styles} from './assets/AppStyles';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Navigation style={styles.container} />
      </PersistGate>
    </Provider>
  );
}
