import React from 'react';
import {
    View,
    StyleSheet,
} from "react-native";
import { DrawerItems } from 'react-navigation';

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
        backgroundColor: '#323232',
    },
    drawerHeader: {
        height: 64,
        borderBottomColor: '#0F0F0F',
        borderBottomWidth: 0.5,
    },
});