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
    return (
        <View style={styles.drawerContainer}>
            <View style={styles.drawerHeader}>
                <View>
                </View>
            </View>
            <View>
                <DrawerItems {...props} />
            </View>
        </View>
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
            activeTintColor: '#ffffff',
            inactiveTintColor: '#a4a4a4',
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
    drawerContainer: {
        flex: 1,
        backgroundColor: '#323232',
    },
    drawerHeader: {
        height: 64,
        borderBottomColor: '#0F0F0F',
        borderBottomWidth: 0.5,
    },
});