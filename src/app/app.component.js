import React from 'react';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import {AppNavigator} from "../ui/app-navigator/app-navigator.component";

export const App = ({ store, persistor, initApp }) => (
    <Provider store={store}>
        <PersistGate
            onBeforeLift={initApp}
            persistor={persistor}>
            <AppNavigator />
        </PersistGate>
    </Provider>
);