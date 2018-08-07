import React from 'react';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';

import { HomeScreen } from "../../home-screen";
import { Habit3 } from "../../screens/habit3.component";
import { DrawerContentComponent } from "./drawer-content.component";

import { Color } from "../shared/colors";

const stackNavigatorConfig = {
    initialRouteName: 'Home',
    navigationOptions: {
        headerStyle: {
            backgroundColor: Color.red,
            // shadowOpacity: 2,
            // shadowRadius: 2,
            // shadowOffset: {
            //     height: 2,
            // },
        },
        headerTintColor: Color.white,
        headerTitleStyle: {
            fontWeight: '500',
        },
    },
};

const HomeStack = createStackNavigator({
    Home: { screen: HomeScreen },
}, stackNavigatorConfig);

const Habit3Stack = createStackNavigator({
    Habit3Stack: { screen: HomeScreen },
}, stackNavigatorConfig);

const drawerNavigatorConfig = {
    initialRouteName: 'Home',
    drawerPosition: 'left',
    drawerWidth: 200,
    contentComponent: DrawerContentComponent,
    contentOptions: {
        activeTintColor: Color.textBlack,
        inactiveTintColor: Color.textBlack,
        activeBackgroundColor: Color.silver,
        labelStyle: {
            fontWeight: '400',
        }
    },
};

export const RootNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeStack },
        Habits3: { screen: Habit3Stack },
    },
    drawerNavigatorConfig,
);

