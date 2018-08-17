import React, { Component } from "react";
import {
    View,
    StyleSheet,
} from "react-native";

export class SharpenTheSawScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Sharpen The Saw",
    });

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.blueBox}/>
                <View style={styles.blueBox}>
                    <View style={styles.redBox}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        backgroundColor: '#ecf0f1',
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
    },
    blueBox: {
        width: 320,
        height: 100,
        backgroundColor: 'steelblue',
        borderRadius: 20,
        margin: 5,
        padding: 5
    },
    redBox: {
        width: 50,
        height: 50,
        backgroundColor: 'red',
        borderRadius: 20,
    },
    button: {
        backgroundColor: '#4ba37b',
        width: 100,
        borderRadius: 50,
        alignItems: 'center',
        marginTop: 100
    }
});
