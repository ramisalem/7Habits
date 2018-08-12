import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import {
    BeProactiveScreen,
    BeginWithEndScreen,
    FirstThingFirstScreen,
    CreateTodoScreen,
} from "../../../../screens/index";
import {
    routeNames,
    screenRouteName,
} from "../route-config";
import { stackNavigatorConfig } from "./stack-navigation-options";

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