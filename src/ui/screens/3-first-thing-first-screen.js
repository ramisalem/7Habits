import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Button
} from "react-native";
import { TodoListCard } from "../component/todo-list-card/todo-list-card.component";

import { COLOR } from "../shared/colors";
import { TODO_GROUP_NAME } from "../../shared/constant";
import { scaledSize } from "../shared/size";

export class FirstThingFirstScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "First Thing First",
    });

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.horizonPart}>
                    <View style={styles.verticalPart}>
                        <TodoListCard type={TODO_GROUP_NAME.IMPORTANT}/>
                    </View>
                    <View style={styles.verticalPart}>
                        <TodoListCard type={TODO_GROUP_NAME.IMPORTANT_URGENT}/>
                    </View>
                </View>
                <View style={styles.horizonPart}>
                    <View style={styles.verticalPart}>
                        <TodoListCard type={TODO_GROUP_NAME.NOT_URGENT}/>
                    </View>
                    <View style={styles.verticalPart}>
                        <TodoListCard type={TODO_GROUP_NAME.URGENT}/>
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
        margin: scaledSize(8),
        marginBottom: scaledSize(20),
        paddingVertical: 2,
    },
    horizonPart: {
        flex:1 ,
        flexDirection: 'row',
        width: '100%',
    },
    verticalPart: {
        flex:1,
        margin: scaledSize(8),
    },
});
