import React, { Component } from "react";
import {
    View,
    StyleSheet,
} from "react-native";

export class CreateTodoScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Create Todo",
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