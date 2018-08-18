import { COLOR } from "../ui/shared/colors";

const todoTypeCreator = (type, title, tintColor) => ({
    type, title, tintColor
});

export const TODO_GROUP_NAME = {
    IMPORTANT: 'important',
    IMPORTANT_URGENT: 'importantUrgent',
    URGENT: 'urgent',
    NOT_URGENT: 'notUrgent',
};

export const todoGroup = {
    [TODO_GROUP_NAME.IMPORTANT]: todoTypeCreator(
        TODO_GROUP_NAME.IMPORTANT,
        '重要',
        COLOR.BLUE,
    ),
    [TODO_GROUP_NAME.IMPORTANT_URGENT]: todoTypeCreator(
        TODO_GROUP_NAME.IMPORTANT_URGENT,
        '重要紧急',
        COLOR.RED,
    ),
    [TODO_GROUP_NAME.URGENT]: todoTypeCreator(
        TODO_GROUP_NAME.URGENT,
        '紧急',
        COLOR.BANANA,
    ),
    [TODO_GROUP_NAME.NOT_URGENT]: todoTypeCreator(
        TODO_GROUP_NAME.NOT_URGENT,
        '不着急',
        COLOR.SAGE,
    ),
};