import React from 'react';
import { connect } from 'react-redux';
import { createDrawerNavigator } from 'react-navigation';
import {
    reduxifyNavigator,
    createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import LoginScreen from '../../home-screen/LoginScreen';

const middleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.navigation.nav
);

const RootNavigator = createDrawerNavigator(
    {
        Login: { screen: LoginScreen },
    },
    {
        initialRouteName: 'Login',
        contentOptions: {
            activeTintColor: '#e91e63',
        },
    }
);

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
    state: state.navigation.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, middleware };
