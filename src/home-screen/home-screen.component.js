import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import { Icon, Button, Container, Header, Content, Left } from 'native-base'


export class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Home",
        headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} />,
    });


    render() {
        return (
            <Container>
                <Content
                    contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                    <Button
                        onPress={() => this.props.navigation.navigate('Settings')} full>
                        <Text style={{ color: 'white' }}>Go To Settings Screen</Text>
                    </Button>
                </Content>

            </Container>

        )
    }

}


const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});