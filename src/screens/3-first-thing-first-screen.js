import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Button
} from "react-native";
import { TodoListCard } from "../ui/todo-list-card/todo-list-card.component";

import { COLOR } from "../ui/shared/colors";

export class FirstThingFirstScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "First Thing First",
    });

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.horizonPart}>
                    <View style={styles.verticalPart}>
                        <TodoListCard navigation={this.props.navigation}/>
                    </View>
                    <View style={styles.verticalPart}/>
                </View>
                <View style={styles.horizonPart}>
                    <View style={styles.verticalPart}/>
                    <View style={styles.verticalPart}/>
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
        backgroundColor: COLOR.GROUP,
        margin: 5,
        paddingVertical: 2,
    },
    horizonPart: {
        flex:1 ,
        flexDirection: 'row',
        width: '100%',
    },
    verticalPart: {
        flex:1,
        backgroundColor: COLOR.WHITE,
        margin: 5,
    },
});
