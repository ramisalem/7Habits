import React from "react";
import {
    StyleSheet,
} from "react-native";

import { Icon } from 'native-base'
import { Color } from "../../shared/colors";

export const MenuButton = (navigation) => (
    <Icon
        name="ios-menu"
        style={styles.icon}
        onPress={() => navigation.openDrawer()}
    />
);

const styles = StyleSheet.create({
    icon: {
        paddingLeft: 15,
        color: Color.Black,
        width: '80%',
    },
});