import React from "react";
import { withNavigation } from 'react-navigation';
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
} from 'react-native';
import { COLOR } from "../../shared/colors";
import { MCIcons } from "../drawer/drawer-icon";
import { BodyText } from "../body-text/body-text";

export const cardType = {
    importantUrgent: 'importantUrgent',
    important: 'important',
    urgent: 'urgent',
    notUrgent: 'notUrgent',
};

const cardColor = {
    importantUrgent: COLOR.RED,
    important: COLOR.BLUE,
    urgent: COLOR.BANANA,
    notUrgent: COLOR.SAGE,
};


const TodoListCardComponent = ({type, navigation}) => (
    <View style={styles.container}>
        <View style={[styles.cardHeader, {backgroundColor: cardColor[type]}]}>
            <BodyText style={styles.headerText}>重要</BodyText>
        </View>
        <View style={styles.cardBody}>
            <TouchableWithoutFeedback
                onPress={ () => { navigation.navigate('createTodoScreen')}}>
                <View style={styles.container}>
                    <View style={styles.todoItem}>
                        {MCIcons.checkboxMarkedCircleOutline({tintColor: cardColor[type]})}
                        <BodyText>Movie</BodyText>
                    </View>
                    <View style={styles.todoItem}>
                        {MCIcons.checkboxMarkedCircleOutline({tintColor: cardColor[type]})}
                        <BodyText>Movie</BodyText>
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
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    headerText: {
        color: COLOR.WHITE,
    },
    cardBody: {
        flex: 6,
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