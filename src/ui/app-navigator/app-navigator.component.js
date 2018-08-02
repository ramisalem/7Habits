import React from 'react';
import { connect } from 'react-redux';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import {
    reduxifyNavigator,
    createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import { HomeScreen } from "../../home-screen";

const middleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.navigation.nav
);

const HomeStack = createStackNavigator({
    Home: { screen: HomeScreen },
});

const RootNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeStack },
    },
    {
        initialRouteName: 'Home',
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
