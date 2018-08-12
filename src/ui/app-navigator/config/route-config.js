export const routeNames = {
    beProactive: 'beProactive',
    beginWithEnd: 'beginWithEnd',
    firstThingFirst: 'firstThingFirst',

    createTodo: 'createTodo',
};

const routePostfix = {
    screen: 'Screen',
    drawer: 'Drawer',
};

export const screenRouteName =
    (routeName) => `${routeName}${routePostfix.screen}`;
export const drawerRouteName =
    (routeName) => `${routeName}${routePostfix.drawer}`;