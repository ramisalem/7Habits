import React from "react";
import {
    Text,
    StyleSheet,
} from 'react-native';
import { COLOR } from "../../shared/colors";
import { scaledSize } from "../../shared/size";

export const BodyText = (props) => (
    <Text
        style={styles.text}
        {...props}>
        {props.children}
    </Text>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    text: {
        color: COLOR.GRAPHITE,
        fontSize: scaledSize(14),
        fontFamily: 'PingFangTC-Regular',
    }
});