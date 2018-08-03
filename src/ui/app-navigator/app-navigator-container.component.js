import { connect } from 'react-redux';
import {
    reduxifyNavigator,
    createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import { RootNavigator } from "./app-navigator.component";

const middleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.navigation.nav
);

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
    state: state.navigation.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { AppNavigator, middleware };