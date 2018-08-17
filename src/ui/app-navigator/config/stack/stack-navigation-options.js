import { COLOR } from "../../../shared/colors";
import { MenuButton, TintButton } from "../../../component/menu-button/menu-button";
import { scaledSize } from "../../../shared/size";

export const stackNavigatorOptions = {
    navigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: COLOR.WHITE,
            borderBottomColor: COLOR.WHITE,
            shadowColor: 'black',
            shadowOpacity: 0.2,
            shadowRadius: 5,
            shadowOffset: { height: 1 },
            elevation: 4,
        },
        headerTitleStyle: {
            fontWeight: '500',
            fontSize: scaledSize(20),
        },
        headerTintColor: COLOR.BLACK,
        headerLeft: MenuButton(navigation),
        headerRight: TintButton(navigation),
    }),
};