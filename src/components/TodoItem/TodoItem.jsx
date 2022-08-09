import './TodoItem.scss';
import {
  removeTodoAction,
  toggleTodoAction,
} from '../../store/actions/todoActions';
import { useDispatch } from 'react-redux';
function TodoItem(props) {
  const dispatch = useDispatch();
  function deleteTodo(id) {
    dispatch(removeTodoAction(id));
  }
  function toggleTodo(id) {
    dispatch(toggleTodoAction(id));
  }
  return (
    <div className="todo-item">
      <label className="todo-item__checkbox-label">
        <input
          type="checkbox"
          checked={props.completed}
          onChange={() => toggleTodo(props.id)}
        />
        <span className="todo-item__checkmark"></span>
      </label>
      <p
        className={`todo-item__text ${
          props.completed ? 'todo-item__text_line-through' : ''
        }`}
      >
        {props.text}
      </p>
      <button
        onClick={() => deleteTodo(props.id)}
        className="todo-item__delete"
      ></button>
    </div>
  );
}

export default TodoItem;
