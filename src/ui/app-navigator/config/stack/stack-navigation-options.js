import { Color } from "../../../shared/colors";
import { MenuButton } from "../../../component/menu-button/menu-button";

export const stackNavigatorOptions = {
    navigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: Color.White,
            borderBottomColor: Color.White,
            shadowColor: 'black',
            shadowOpacity: 0.2,
            shadowRadius: 5,
            shadowOffset: { height: 1 },
            elevation: 4,
        },
        headerTitleStyle: {
            fontWeight: '500',
        },
        headerTintColor: Color.Black,
        headerLeft: MenuButton(navigation),
    }),
};