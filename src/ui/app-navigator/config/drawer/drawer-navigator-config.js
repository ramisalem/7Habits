import { createDrawerNavigator } from 'react-navigation';
import {
    beProactiveStackNavigator,
    beginWithEndStackNavigator,
    firstThingFirstStackNavigator,
    thinkWinWinStackNavigator,
    seekToUnderstandStackNavigator,
    synergizeStackNavigator,
    sharpenTheSawStackNavigator,
} from "../../config/stack/stack-navigator-config";
import { drawerNavigatorOptions } from "./drawer-navigator-options";
import { routeNames } from "../route-config";
import { drawerRouteName } from "../route-config";
import {
    beProactiveNavOptions,
    beginWithEndNavOptions,
    firstThingFirstNavOptions,
    thinkWinWinNavOptions,
    seekToUnderstandNavOptions,
    synergizeNavOptions,
    sharpenTheSawNavOptions,
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
    [drawerRouteName(routeNames.thinkWinWin)]: {
        screen: thinkWinWinStackNavigator,
        navigationOptions: thinkWinWinNavOptions,
    },
    [drawerRouteName(routeNames.seekToUnderstand)]: {
        screen: seekToUnderstandStackNavigator,
        navigationOptions: seekToUnderstandNavOptions,
    },
    [drawerRouteName(routeNames.synergize)]: {
        screen: synergizeStackNavigator,
        navigationOptions: synergizeNavOptions,
    },
    [drawerRouteName(routeNames.sharpenTheSaw)]: {
        screen: sharpenTheSawStackNavigator,
        navigationOptions: sharpenTheSawNavOptions,
    },
};

export const drawerNavigator = createDrawerNavigator(
    drawerRoutes,
    drawerNavigatorOptions
);
