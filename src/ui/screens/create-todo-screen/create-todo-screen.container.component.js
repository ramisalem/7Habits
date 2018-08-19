import { connect } from 'react-redux';
import { CreateTodoScreen } from "./create-todo-screen.component";
import { todoActions } from "../../../app-model/todo/todo.action";

const mapStateToProps = (state) => ({
    todoGroup: state.todo.todoGroup,
});

const mapDispatchToProps = (dispatch) => ({
    updateTodoGroup: (group, content) =>
        dispatch(todoActions.updateTodoGroup({ group, content })),
});

const connector = connect(mapStateToProps, mapDispatchToProps);
export const CreateTodoScreenContainer = connector(CreateTodoScreen);
