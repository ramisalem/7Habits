import React from 'react';
import {
    View,
    StyleSheet,
} from "react-native";
import { DrawerItems } from 'react-navigation';

import { Color } from "../shared/colors";

export const DrawerContentComponent = (props) => (
    <View style={styles.drawerContainer}>
        <View style={styles.drawerHeader}>
            <View />
        </View>
        <View>
            <DrawerItems {...props} />
        </View>
    </View>
);

const styles = StyleSheet.create({
    drawerContainer: {
        flex: 1,
        backgroundColor: Color.group,
    },
    drawerHeader: {
        height: 64,
        borderBottomColor: Color.shadow,
        borderBottomWidth: 1.5,
    },
});