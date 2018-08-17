import React from "react";
import {
    Text,
    StyleSheet,
} from 'react-native';
import { COLOR } from "../../shared/colors";
import { scaledSize } from "../../shared/size";

export const BodyText = (props) => (
    <Text
        {...props}
        style={styles.text}>
        {props.children}
    </Text>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    text: {
        fontSize: scaledSize(18),
        color: COLOR.TEXT,
    }
});