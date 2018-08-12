import { createDrawerNavigator } from 'react-navigation';
import {
    beProactiveStackNavigator,
    beginWithEndStackNavigator,
    firstThingFirstStackNavigator
} from "../../config/stack/stack-navigator-config";
import { drawerNavigatorOptions } from "./drawer-navigator-options";
import { routeNames } from "../route-config";
import { drawerRouteName } from "../route-config";
import {
    beProactiveNavOptions,
    beginWithEndNavOptions,
    firstThingFirstNavOptions,
} from "./drawer-navigator-options";

const drawerRoutes = {
    [drawerRouteName(routeNames.beProactive)]: {
        screen: beProactiveStackNavigator,
        navigationOptions: beProactiveNavOptions,
    },
    [drawerRouteName(routeNames.beginWithEnd)]: {
        screen: beginWithEndStackNavigator,
        navigationOptions: beginWithEndNavOptions,
    },
    [drawerRouteName(routeNames.firstThingFirst)]: {
        screen: firstThingFirstStackNavigator,
        navigationOptions: firstThingFirstNavOptions,
    },
};

export const drawerNavigator = createDrawerNavigator(
    drawerRoutes,
    drawerNavigatorOptions
);
