import { Color } from "../../../shared/colors";
import { DrawerContentComponent } from "../../../component/drawer/drawer-content.component";
import { routeNames } from "../route-config";
import { drawerRouteName } from "../route-config";
import { drawerIcon } from "../../../component/drawer/drawer-icon";

export const drawerNavigatorOptions = {
    initialRouteName: drawerRouteName(routeNames.firstThingFirst),
    drawerPosition: 'left',
    drawerWidth: 200,
    contentComponent: DrawerContentComponent,
    contentOptions: {
        activeTintColor: Color.Tomato,
        inactiveTintColor: Color.Black,
        activeBackgroundColor: Color.Silver,
        labelStyle: {
            fontWeight: '400',
        },
        itemsContainerStyle: {
            paddingVertical: 6,
        },
    },
};

const drawerOptions = (title, iconName) => ({
    drawerLabel: title,
    drawerIcon: ({ tintColor }) => drawerIcon(iconName, tintColor),
});

export const beProactiveNavOptions = drawerOptions('1', 'home');
export const beginWithEndNavOptions = drawerOptions('2', 'home');
export const firstThingFirstNavOptions = drawerOptions('3', 'home');