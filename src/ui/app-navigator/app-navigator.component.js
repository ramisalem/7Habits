import React from 'react';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';

import { HomeScreen } from "../../home-screen";
import { DrawerContentComponent } from "./drawer-content.component";

const HomeStack = createStackNavigator({
    Home: { screen: HomeScreen },
});

const drawerNavigatorConfig = {
    initialRouteName: 'Home',
    drawerPosition: 'left',
    drawerWidth: 200,
    contentComponent: DrawerContentComponent,
    contentOptions: {
        activeTintColor: '#ffffff',
        inactiveTintColor: '#a4a4a4',
        activeBackgroundColor: 'transparent'
    },
};

export const RootNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeStack },
    },
    drawerNavigatorConfig,
);

