import React, { Component } from "react";
import {
    Text,
    TextInput,
    View,
    StyleSheet,
} from "react-native";
import { CloseButton, SaveButton } from "../../component/menu-button/menu-button";
import { COLOR } from "../../shared/colors";
import { scaledSize } from "../../shared/size";
import { delay } from "../../../shared/utils";
import { todoGroup } from "../../../shared/constant";

export class CreateTodoScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: null,
        headerLeft: CloseButton(navigation),
        headerRight: SaveButton(navigation.getParam('saveAction', null)),
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

    constructor(props) {
        super(props);
        const { navigation, todoGroup } = this.props;
        const group = navigation.getParam('todoGroup', '');
        this.state = {
            group,
            content: todoGroup[group],
        };
    }

    componentWillMount() {
        this.updateNavigationOptions();
    }

    componentDidMount() {
        delay(500).then(() => this.editor.focus());
    }

    updateNavigationOptions() {
        const { navigation, updateTodoGroup } = this.props;
        const group = navigation.getParam('todoGroup', '');
        const updateCurrentGroup = () => {
            updateTodoGroup(group, this.state.content);
            navigation.goBack(null);
        };
        navigation.setParams({ headerColor: todoGroup[group].tintColor });
        navigation.setParams({ saveAction: updateCurrentGroup });

    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    multiline
                    style={styles.editor}
                    onChangeText={(text) => this.setState({content: text})}
                    ref={ ref => this.editor = ref}
                    value={this.state.content}
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