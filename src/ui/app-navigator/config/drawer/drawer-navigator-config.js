import { Color } from "../../../shared/colors";
import { DrawerContentComponent } from "../../../component/drawer/drawer-content.component";

export const drawerNavigatorConfig = {
    initialRouteName: 'FirstThingFirst',
    drawerPosition: 'left',
    drawerWidth: 200,
    contentComponent: DrawerContentComponent,
    contentOptions: {
        activeTintColor: Color.Black,
        inactiveTintColor: Color.Black,
        activeBackgroundColor: Color.Silver,
        labelStyle: {
            fontWeight: '400',
        },
        itemsContainerStyle: {
            paddingVertical: 6,
        },
    },
    drawerLabel: '123'
};