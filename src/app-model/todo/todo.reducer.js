// @flow

import { combineReducers } from 'redux';
import { TODO_GROUP_NAME } from "../../shared/constant";
import { TODO_ACTION } from "./todo.action";

const initialState = {
    [TODO_GROUP_NAME.IMPORTANT_URGENT]: '',
    [TODO_GROUP_NAME.IMPORTANT]: '',
    [TODO_GROUP_NAME.URGENT]: '',
    [TODO_GROUP_NAME.NOT_URGENT]: '',
};

const todoGroup = (state = initialState, action) => {
    switch (action.type) {
        case TODO_ACTION.UPDATE_TODO_GROUP:
            const { group, content } = action.payload;
            return {
                ...state,
                [group]: content,
            };
        default:
            return state;
    }
};

export const todo = combineReducers({
    todoGroup,
});