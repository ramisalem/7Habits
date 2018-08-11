import React from 'react';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';

import { stackNavigatorConfig } from "./config/stack-navigator-config";
import { drawerNavigatorConfig } from "./config/drawer-navigator-config";

import { HomeScreen } from "../../home-screen";
import { Habit3 } from "../../screens/habit3.component";

const HomeStack = createStackNavigator({
    Home: { screen: HomeScreen },
}, {
    ...stackNavigatorConfig,
    initialRouteName: 'Home',
});

const Habit3Stack = createStackNavigator({
    Habit3: { screen: Habit3 },
}, {
    ...stackNavigatorConfig,
    initialRouteName: 'Habit3',
});

export const RootNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeStack },
        Habits3D: { screen: Habit3Stack },
    },
    drawerNavigatorConfig,
);

