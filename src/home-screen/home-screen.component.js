import React, { Component } from "react";
import {
    View,
    StyleSheet,
} from "react-native";

import { Icon } from 'native-base'
import {Color} from "../ui/shared/colors";

export const menuIcon = (navigation) => (
    <Icon
        name="ios-menu"
        style={styles.icon}
        onPress={() => navigation.openDrawer()}
    />
);

export class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "7Habits",
        // headerLeft: menuIcon(navigation),
    });

    render() {
        return (
            <View style={styles.container}>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
    },
    icon: {
        paddingLeft: 15,
        color: Color.Black,
        width: '80%',
    },
});