import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import {
    BeProactiveScreen,
    BeginWithEndScreen,
    FirstThingFirstScreen,
    CreateTodoScreen,
} from "../../../screens";
import { stackNavigatorConfig } from "./stack-navigator-config";

const routeNames = {
    beProactive: 'beProactive',
    beginWithEnd: 'beginWithEnd',
    firstThingFirst: 'firstThingFirst',

    createTodo: 'createTodo',
};

const routePostfix = {
    screen: 'Screen',
    drawer: 'Drawer',
};

const screenRouteName =
    (routeName) => `${routeName}${routePostfix.screen}`;
const drawerRouteName =
    (routeName) => `${routeName}${routePostfix.drawer}`;

const screenRoute = (routeName, screen) => ({
    [screenRouteName(routeName)]: { screen },
});

const stackNavigator = (route, initialRouteName) =>
    createStackNavigator(route, {
            initialRouteName,
            ...stackNavigatorConfig
        },
    );

const beProactiveStackRoutes =
    screenRoute(routeNames.beProactive, BeProactiveScreen);
const beginWithEndStackRoutes =
    screenRoute(routeNames.beginWithEnd, BeginWithEndScreen);
const firstThingFirstStackRoutes = {
    ...screenRoute(routeNames.firstThingFirst, FirstThingFirstScreen),
    ...screenRoute(routeNames.createTodo, CreateTodoScreen),
};

export const beProactiveStackNavigator = stackNavigator(
    beProactiveStackRoutes, screenRouteName(routeNames.beProactive)
);
export const beginWithEndStackNavigator = stackNavigator(
    beginWithEndStackRoutes, screenRouteName(routeNames.beginWithEnd)
);
export const firstThingFirstStackNavigator = stackNavigator(
    firstThingFirstStackRoutes, screenRouteName(routeNames.firstThingFirst)
);