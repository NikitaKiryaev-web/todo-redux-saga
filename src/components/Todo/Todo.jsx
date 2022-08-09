import './Todo.scss';
import Input from '../Input/Input';
import List from '../List/List';

function Todo() {
  return (
    <div className="todo">
      <h1 className="todo__title">To Do App</h1>
      <Input />
      <List />
    </div>
  );
}
export default Todo;
