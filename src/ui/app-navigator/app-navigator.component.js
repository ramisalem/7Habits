import React from 'react';
import { connect } from 'react-redux';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import {
    reduxifyNavigator,
    createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import { HomeScreen } from "../../home-screen";
import { DrawerContentComponent } from "./drawer-content.component";

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
        drawerPosition: 'left',
        drawerWidth: 200,
        contentComponent: DrawerContentComponent,
        contentOptions: {
            activeTintColor: '#ffffff',
            inactiveTintColor: '#a4a4a4',
            activeBackgroundColor: 'transparent'
},
    }
);

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
    state: state.navigation.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, middleware };

