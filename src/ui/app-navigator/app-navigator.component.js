import React from 'react';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import { drawerNavigatorConfig } from "./config/drawer/drawer-navigator-config";
import { Color } from "../shared/colors";

import {
    beProactiveStackNavigator,
    beginWithEndStackNavigator,
    firstThingFirstStackNavigator
} from "./config/stack/stack-navigator-config";

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
        screen: beProactiveStackNavigator,
        navigationOptions: homeNavOptions,
    },
    BeginWithEnd: {
        screen: beginWithEndStackNavigator,
    },
    FirstThingFirst: {
        screen: firstThingFirstStackNavigator,
    },
};

const drawer = createDrawerNavigator(
    DrawerRoutes,
    drawerNavigatorConfig
);

export const RootNavigator = createStackNavigator({
        Drawer: {
            name: 'Drawer',
            screen: drawer,
        },
    },
    // hide the header since the outer StackNavigator is a wrapper.
    { headerMode: 'none' }
);
