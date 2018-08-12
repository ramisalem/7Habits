import React from 'react';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import { stackNavigatorConfig } from "./config/stack-navigator-config";
import { drawerNavigatorConfig } from "./config/drawer-navigator-config";

import { Color } from "../shared/colors";

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

export const getDrawerNavigationOptions = (title, backgroundColor, titleColor, drawerIcon) => ({
    title,
    headerTitle: title,
    headerStyle: {
        backgroundColor,
    },
    headerTitleStyle: {
        color: titleColor,
    },
    headerTintColor: titleColor,
    drawerLabel: title,
    drawerIcon,
});

const getDrawerIcon = (iconName, tintColor) => <Icon name={iconName} size={20} color={tintColor} />;
const homeDrawerIcon = ({ tintColor }) => getDrawerIcon('home', tintColor);
const homeNavOptions = getDrawerNavigationOptions('Home', Color.Banana, 'white', homeDrawerIcon);

const DrawerRoutes = {
    BeProactive: {
        name: 'BeProactiveName',
        screen: createStackNavigator(BeProactiveStackRoutes, { initialRouteName: 'BeProactiveScreen', ...stackNavigatorConfig}),
        navigationOptions: homeNavOptions,
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

const drawer = createDrawerNavigator(
    DrawerRoutes,
    drawerNavigatorConfig
);

export const RootNavigator =
    createStackNavigator({
            Drawer: {
                name: 'Drawer',
                screen: drawer,
            },
            // ...Stack
        },
        {
            headerMode: 'none'
        }
    );
