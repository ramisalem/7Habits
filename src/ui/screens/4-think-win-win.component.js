import React, { Component } from "react";
import {
    Button,
    View,
    StyleSheet,
} from "react-native";

export class ThinkWinWinScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "First Thing First",
    });

    render() {
        return (
            <View style={styles.container}>
                <Button
                    onPress={() => this.props.navigation.navigate('beProactiveScreen')}
                    title="Go to home tab"
                />
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