import React from "react";
import {
    View,
    StyleSheet,
    TouchableWithoutFeedback,
} from 'react-native';
import { COLOR } from "../../shared/colors";
import { BodyText } from "../body-text/body-text";
import { todoGroup } from "../../../shared/constant";
import { scaledSize } from "../../shared/size";

export const TodoListCardComponent = ({group, content, navigation}) => (
    <View style={styles.container}>
        <View style={[styles.cardHeader, {backgroundColor: todoGroup[group].tintColor}]}>
            <BodyText style={styles.headerText}>{todoGroup[group].title}</BodyText>
        </View>
        <View style={styles.cardBody}>
            <TouchableWithoutFeedback
                onPress={ () => {
                    navigation.navigate('createTodoScreen', { todoGroup: group })
                }}>
                <View style={styles.container}>
                    <View style={styles.todoItem}>
                        <BodyText>{content}</BodyText>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    </View>
);

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