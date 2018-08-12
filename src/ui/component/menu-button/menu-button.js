import React from "react";
import {
    StyleSheet,
} from "react-native";

import { Color } from "../../shared/colors";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const iconSize = 20;

export const MenuButton = (navigation) => (
    <MaterialCommunityIcons
        name='menu'
        size={iconSize}
        style={styles.iconLeft}
        onPress={() => navigation.openDrawer()}
    />
);

export const TintButton = (navigation) => (
    <MaterialCommunityIcons
        name='lightbulb-on-outline'
        size={iconSize}
        color={Color.Red}
        style={styles.iconRight}
        onPress={() => navigation.openDrawer()}
    />
);

const styles = StyleSheet.create({
    iconLeft: {
        paddingLeft: 15,
        color: Color.Graphite,
    },
    iconRight: {
        paddingRight: 15,
        color: Color.Banana,
    },
});