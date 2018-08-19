import { createPayloadActionCreator } from "../../shared/payload-action";

const UPDATE_TODO_GROUP = 'todo/UPDATE_TODO_GROUP';

export const updateTodoGroup = createPayloadActionCreator(UPDATE_TODO_GROUP);

export const todoActions = {
    updateTodoGroup,
};

export const TODO_ACTION = {
    UPDATE_TODO_GROUP,
};