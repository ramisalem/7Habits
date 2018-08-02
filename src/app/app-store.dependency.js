import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware, combineEpics } from 'redux-observable';

import { configureEpicDependencies } from './app-epic.dependency';
import { appReducers } from "../app-model/index.reducer";
import { middleware } from "../ui/app-navigator/app-navigator.component";

const createAppEpic = () => combineEpics(

);

const config = {
    key: 'plan-a-persist',
    storage,
    version: 1,
    whitelist: ['_persist', ],
    debug: true,
};

export function configureStore() {
    const middlewares = [
        createEpicMiddleware(createAppEpic(), {
            dependencies: configureEpicDependencies(),
        }),
        middleware,
    ];
    const middlewareEnhancer = applyMiddleware(...middlewares);
    const enhancers = composeWithDevTools(middlewareEnhancer);
    console.log(appReducers)
    const reducer = persistCombineReducers(config, appReducers);

    const store = createStore(reducer, enhancers);
    const persistor = persistStore(store);

    return { persistor, store };
}
