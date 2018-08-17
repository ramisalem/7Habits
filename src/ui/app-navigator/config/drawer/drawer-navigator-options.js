import { COLOR } from "../../../shared/colors";
import { DrawerContentComponent } from "../../../component/drawer/drawer-content.component";
import { routeNames } from "../route-config";
import { drawerRouteName } from "../route-config";
import { MCIcons } from "../../../component/drawer/drawer-icon";
import { SCREEN } from "../../../shared/size";

export const drawerNavigatorOptions = {
    initialRouteName: drawerRouteName(routeNames.firstThingFirst),
    drawerPosition: 'left',
    drawerWidth: SCREEN.GOLDEN_WIDTH,
    contentComponent: DrawerContentComponent,
    contentOptions: {
        activeTintColor: COLOR.TOMATO,
        inactiveTintColor: COLOR.BLACK,
        activeBackgroundColor: COLOR.SILVER,
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
export const synergizeNavOptions = drawerOptions('统合综效', MCIcons.trendingUp);

export const sharpenTheSawNavOptions = drawerOptions('不断更新', MCIcons.cached);