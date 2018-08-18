import React, { Component } from "react";
import {
    Text,
    TextInput,
    View,
    StyleSheet,
} from "react-native";
import { CloseButton, SaveButton } from "../component/menu-button/menu-button";
import { COLOR } from "../shared/colors";
import { scaledSize } from "../shared/size";
import { delay } from "../../shared/utils";
import { todoGroup } from "../../shared/constant";

export class CreateTodoScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: null,
        headerLeft: CloseButton(navigation),
        headerRight: SaveButton(null),
        headerStyle: {
            backgroundColor: navigation.getParam('headerColor', COLOR.WHITE),
            borderBottomColor: COLOR.WHITE,
            shadowColor: 'black',
            shadowOpacity: 0.2,
            shadowRadius: 1,
            shadowOffset: { height: 0 },
            elevation: 14,
        },

    });

    componentWillMount() {
        const group = this.props.navigation.getParam('todoGroup', '');
        this.props.navigation.setParams({headerColor: todoGroup[group].tintColor});
    }

    componentDidMount() {
        delay(500).then(() => this.editor.focus());
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    multiline
                    style={styles.editor}
                    onChangeText={(text) => console.log({text})}
                    ref={ ref => this.editor = ref}
                >
                </TextInput>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: scaledSize(20),
        paddingHorizontal: scaledSize(15),
        backgroundColor: COLOR.WHITE,
    },
    editor: {
        flex: 1,
        fontSize: scaledSize(18),
        color: COLOR.GRAPHITE,
        fontFamily: 'PingFangTC-Regular',
    },
    toolbar: {

    },
    icon: {
        paddingLeft: 15,
        color: 'white',
        width: '80%',
    },
});