import { COLOR } from "../../../shared/colors";
import { MenuButton, TintButton } from "../../../component/menu-button/menu-button";

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
        },
        headerTintColor: COLOR.BLACK,
        headerLeft: MenuButton(navigation),
        headerRight: TintButton(navigation),
    }),
};