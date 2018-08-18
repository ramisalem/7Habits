import React, { Component } from "react";
import {
    Text,
    TextInput,
    View,
    StyleSheet,
} from "react-native";
import { CloseButton } from "../component/menu-button/menu-button";

export class CreateTodoScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Create Todo",
        headerLeft: CloseButton(navigation),
        headerRight: <Text>Save</Text>
    });

    render() {
        return (
            <TextInput
                style={styles.container}
                multiline
            >
                {/*<TextInput>*/}
                    {/**/}
                {/*</TextInput>*/}
            </TextInput>
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