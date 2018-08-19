import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { TodoListCardComponent } from "./todo-list-card.component";

const mapStateToProps = (state, { group }) => ({
    group,
    content: state.todo.todoGroup[group],
});

const connector = connect(mapStateToProps, null);

export const TodoListCard = connector(withNavigation(TodoListCardComponent));