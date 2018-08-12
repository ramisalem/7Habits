import { createStackNavigator } from 'react-navigation';
import {
    BeProactiveScreen,
    BeginWithEndScreen,
    FirstThingFirstScreen,
    CreateTodoScreen,
} from "../../../../screens";
import {
    routeNames,
    screenRouteName,
} from "../route-config";
import { stackNavigatorOptions } from "./stack-navigation-options";

const screenRoute = (routeName, screen) => ({
    [screenRouteName(routeName)]: { screen },
});
const stackNavigator = (route, initialRouteName) =>
    createStackNavigator(route, {
            initialRouteName,
            ...stackNavigatorOptions
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