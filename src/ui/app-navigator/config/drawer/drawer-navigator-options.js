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

export const beProactiveNavOptions = drawerOptions('积极主动', MCIcons.walk);
export const beginWithEndNavOptions = drawerOptions('以终为始', MCIcons.target);
export const firstThingFirstNavOptions = drawerOptions('要事第一', MCIcons.playlistCcheck);

export const thinkWinWinNavOptions = drawerOptions('双赢思维', MCIcons.accountMultiple);
export const seekToUnderstandNavOptions = drawerOptions('知彼解己', MCIcons.earHearing);
export const synergizeNavOptions = drawerOptions('统合综效', MCIcons.lightbulbOnOutline);

export const sharpenTheSawNavOptions = drawerOptions('不断更新', MCIcons.cached);