import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image
} from "react-native";
import { connect } from 'react-redux';
import { createDrawerNavigator, createStackNavigator, DrawerItems } from 'react-navigation';
import {
    reduxifyNavigator,
    createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import { Container, Content, Icon, Header, Body } from 'native-base'

import { HomeScreen } from "../../home-screen";

const middleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.navigation.nav
);

const HomeStack = createStackNavigator({
    Home: { screen: HomeScreen },
});

const CustomDrawerContentComponent = (props) => {
    console.log(props)
    return (
    <Container>
        <Header style={styles.drawerHeader}>
            <Body>
            </Body>
        </Header>
        <Content>
            <DrawerItems {...props} />
        </Content>
    </Container>

)};


const RootNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeStack },
    },
    {
        initialRouteName: 'Home',
        drawerPosition: 'left',
        drawerWidth: 200,
        contentComponent: CustomDrawerContentComponent,
        contentOptions: {
            activeTintColor: '#e91e63',
            activeBackgroundColor: 'transparent'
},
    }
);

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
    state: state.navigation.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, middleware };

const styles = StyleSheet.create({
    drawerHeader: {
        height: 64,
        backgroundColor: 'white'
    },
});