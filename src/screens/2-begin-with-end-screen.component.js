import React, { Component } from "react";
import {
    View,
    StyleSheet,
} from "react-native";

export class BeginWithEndScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Begin With End",
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
        color: 'white',
        width: '80%',
    },
});