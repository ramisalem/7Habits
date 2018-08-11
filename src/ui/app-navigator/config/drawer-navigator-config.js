import { Color } from "../../shared/colors";
import { DrawerContentComponent } from "../drawer-content.component";

export const drawerNavigatorConfig = {
    initialRouteName: 'Home',
    drawerPosition: 'left',
    drawerWidth: 200,
    contentComponent: DrawerContentComponent,
    contentOptions: {
        activeTintColor: Color.Black,
        inactiveTintColor: Color.Black,
        activeBackgroundColor: Color.Silver,
        labelStyle: {
            fontWeight: '400',
        }
    },
};