import React from 'react';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';

import { stackNavigatorConfig } from "./config/stack-navigator-config";
import { drawerNavigatorConfig } from "./config/drawer-navigator-config";

import {
    BeProactiveScreen,
    BeginWithEndScreen,
    FirstThingFirstScreen,
    CreateTodoScreen,
} from "../../screens";

const BeProactiveStackRoutes = {
    BeProactiveScreen: {
        screen: BeProactiveScreen,
    },
};

const BeginWithEndStackRoutes = {
    BeginWithEndScreen: {
        screen: BeginWithEndScreen,
    },
};

const FirstThingFirstStackRoutes = {
    FirstThingFirstScreen: {
        screen: FirstThingFirstScreen,
    },
    CreateTodoScreen: {
        screen: CreateTodoScreen,
    }
};

const DrawerRoutes = {
    BeProactive: {
        name: 'BeProactiveName',
        screen: createStackNavigator(BeProactiveStackRoutes, { initialRouteName: 'BeProactiveScreen', ...stackNavigatorConfig })
    },
    BeginWithEnd: {
        name: 'BeginWithEndName',
        screen: createStackNavigator(BeginWithEndStackRoutes, { initialRouteName: 'BeginWithEndScreen', ...stackNavigatorConfig })
    },
    FirstThingFirst: {
        name: 'FirstThingFirstName',
        screen: createStackNavigator(FirstThingFirstStackRoutes, { initialRouteName: 'FirstThingFirstScreen', ...stackNavigatorConfig })
    },
};

export const RootNavigator =
    createStackNavigator({
            Drawer: {
                name: 'Drawer',
                screen: createDrawerNavigator(
                    DrawerRoutes,
                    drawerNavigatorConfig
                ),
            },
            // ...Stack
        },
        {
            headerMode: 'none'
        }
    );
