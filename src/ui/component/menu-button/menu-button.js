import React from "react";
import { StyleSheet } from "react-native";
import { scaledSize } from "../../shared/size";

import { COLOR } from "../../shared/colors";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const iconSize = scaledSize(22);

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
        style={styles.iconRight}
        onPress={() => navigation.openDrawer()}
    />
);

export const CloseButton = (navigation) => (
    <MaterialCommunityIcons
        name='close'
        size={iconSize}
        style={styles.iconLeft}
        onPress={() => navigation.goBack(null)}
    />
);

const styles = StyleSheet.create({
    iconLeft: {
        paddingLeft: 15,
        color: COLOR.GRAPHITE,
    },
    iconRight: {
        paddingRight: 15,
        color: COLOR.BANANA,
    },
});