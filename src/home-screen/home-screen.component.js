import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';

export class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: '7Habits',
        headerLeft: (
            <Button
                onPress={() => {
                    navigation.openDrawer()}}
                title="M"
                color="#aaaaaa"
            />
        ),
    });

    // static navigationOptions = {
    //     headerTitle: '7Habits',

    // };

    render() {
        console.log(this.props);
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Screen A
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
