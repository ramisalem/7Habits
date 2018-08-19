import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { BodyText } from "../body-text/body-text";
import { scaledSize } from "../../shared/size";

import { COLOR } from "../../shared/colors";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const iconSize = scaledSize(22);
const padding = scaledSize(15);

export const HeaderButton = (iconName, color, onPress) => (
    <MaterialCommunityIcons
        name={iconName}
        size={iconSize}
        style={{paddingHorizontal: padding, color}}
        onPress={onPress}
    />
);

export const CloseButton = (navigation) =>
    HeaderButton('close', COLOR.WHITE, () => navigation.goBack(null));

export const TintButton = (navigation) =>
    HeaderButton('lightbulb-on-outline', COLOR.BANANA, () => navigation.openDrawer());

export const MenuButton = (navigation) =>
    HeaderButton('menu', COLOR.GRAPHITE, () => navigation.openDrawer());

export const SaveButton = (onPress) => (
    <TouchableOpacity onPress={onPress}>
        <BodyText style={styles.textButton}>SAVE</BodyText>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    textButton: {
        fontSize: scaledSize(14),
        color: COLOR.WHITE,
        paddingHorizontal: padding,
    },
});