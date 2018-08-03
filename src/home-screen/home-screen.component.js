import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

//library imports
import { Icon, Button, Container, Header, Content, Left } from 'native-base'

//custom components imports
import CustomHeader from './CustomHeader'

export class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Home",
        headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} />,
        drawerLabel: 'Notification',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('./DrawerIcons/home.png')}
                style={styles.icon}
            />
        ),
    })


    render() {
        return (
            <Container>
                {/*<CustomHeader title="Home2" drawerOpen={() => this.props.navigation.openDrawer()} />*/}
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