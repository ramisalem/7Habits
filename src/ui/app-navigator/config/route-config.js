export const routeNames = {
    beProactive: 'beProactive',
    beginWithEnd: 'beginWithEnd',
    firstThingFirst: 'firstThingFirst',
    thinkWinWin: 'thinkWinWin',
    seekToUnderstand: 'seekToUnderstand',
    synergize: 'synergize',
    sharpenTheSaw: 'sharpenTheSaw',

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