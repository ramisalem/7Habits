import { createStackNavigator } from 'react-navigation';
import { drawerNavigator } from "./config/drawer/drawer-navigator-config";

export const RootNavigator = createStackNavigator({
        Drawer: { screen: drawerNavigator },
    },
    // hide the header since the outer StackNavigator is a wrapper.
    { headerMode: 'none' }
);
