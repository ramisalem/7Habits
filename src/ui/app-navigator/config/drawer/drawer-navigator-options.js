import { Color } from "../../../shared/colors";
import { DrawerContentComponent } from "../../../component/drawer/drawer-content.component";
import { routeNames } from "../route-config";
import { drawerRouteName } from "../route-config";
import {
    MIcons,
    MCIcons
} from "../../../component/drawer/drawer-icon";

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

const drawerOptions = (title, icon) => ({
    drawerLabel: title,
    drawerIcon: icon,
});

export const beProactiveNavOptions = drawerOptions('1', MCIcons.update);
export const beginWithEndNavOptions = drawerOptions('2', MCIcons.target);
export const firstThingFirstNavOptions = drawerOptions('3', MCIcons.gps);

export const thinkWinWinNavOptions = drawerOptions('1', MCIcons.update);
export const seekToUnderstandNavOptions = drawerOptions('2', MCIcons.target);
export const synergizeNavOptions = drawerOptions('3', MCIcons.gps);

export const sharpenTheSawNavOptions = drawerOptions('1', MCIcons.update);