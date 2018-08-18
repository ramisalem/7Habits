import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Button
} from "react-native";
import { TodoListCard } from "../component/todo-list-card/todo-list-card.component";

import { COLOR } from "../shared/colors";

import { cardType } from "../component/todo-list-card/todo-list-card.component";

export class FirstThingFirstScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "First Thing First",
    });

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.horizonPart}>
                    <View style={styles.verticalPart}>
                        <TodoListCard type={cardType.important}/>
                    </View>
                    <View style={styles.verticalPart}>
                        <TodoListCard type={cardType.importantUrgent}/>
                    </View>
                </View>
                <View style={styles.horizonPart}>
                    <View style={styles.verticalPart}>
                        <TodoListCard type={cardType.notUrgent}/>
                    </View>
                    <View style={styles.verticalPart}>
                        <TodoListCard type={cardType.urgent}/>
                    </View>
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
        margin: 10,
        marginBottom: 20,
        paddingVertical: 2,
    },
    horizonPart: {
        flex:1 ,
        flexDirection: 'row',
        width: '100%',
    },
    verticalPart: {
        flex:1,
        margin: 10,
    },
});
