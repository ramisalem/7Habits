import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
} from 'react-native';
import { COLOR } from "../shared/colors";
import { BodyText } from "../component/body-text/body-text";

export const TodoListCard = ({navigation}) => (
    <TouchableWithoutFeedback
        onPress={
            () => {
                navigation.navigate('createTodoScreen')
            }
        }>
        <View style={styles.container}>
            <BodyText>
                - Movie
            </BodyText>
        </View>
    </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
});