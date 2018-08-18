import React from "react";
import { withNavigation } from 'react-navigation';
import {
    View,
    StyleSheet,
    TouchableWithoutFeedback,
} from 'react-native';
import { COLOR } from "../../shared/colors";
import { BodyText } from "../body-text/body-text";
import { todoGroup } from "../../../shared/constant";
import { scaledSize } from "../../shared/size";

const TodoListCardComponent = ({type, navigation}) => (
    <View style={styles.container}>
        <View style={[styles.cardHeader, {backgroundColor: todoGroup[type].tintColor}]}>
            <BodyText style={styles.headerText}>{todoGroup[type].title}</BodyText>
        </View>
        <View style={styles.cardBody}>
            <TouchableWithoutFeedback
                onPress={ () => {
                    navigation.navigate('createTodoScreen', {
                        todoGroup: type,
                    })
                }}>
                <View style={styles.container}>
                    <View style={styles.todoItem}>
                        <BodyText>- Movie</BodyText>
                    </View>
                    <View style={styles.todoItem}>
                        <BodyText>- Read</BodyText>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    </View>
);

export const TodoListCard = withNavigation(TodoListCardComponent);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cardHeader: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    headerText: {
        color: COLOR.WHITE,
        fontSize: scaledSize(16),
    },
    cardBody: {
        flex: 12,
        padding: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: COLOR.WHITE,
    },
    todoItem: {
        margin: 5,
        flexDirection: 'row',
    }
});