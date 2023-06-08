import {useState} from 'react';
import { AiFillStar } from 'react-icons/ai';
import Todo from "./components/Todo";
import './App.css';
import AddTodo from "./components/AddTodo";

function App() {
  const [todos, setTodos] = useState([]);
  const [showFav, setShowFav] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState('');

  const onAddTodoClick = (color) => {
    setTodos(
      [...todos,
            { id: todos.length + 1,
              text: 'This is New ToDo',
              date: 'May 21, 2022',
              isFav: false,
              bgColor: color
            }
      ])
  }

  const onTodoTextChange = (id, text) => {
    console.log(id, text);
    setTodos(todos.map((todoItem) => {
      if (todoItem.id === id) {
        return { ...todoItem, text: text };
      }
      return todoItem;
    }));
  }

  const onDeleteTodoClick = (id) => {
    const newTodosArray = todos.filter(todo => id !== todo.id);
    setTodos(newTodosArray);

    console.log(id)
  }

  const onFavTodoClick = (id) => {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isFav: !todo.isFav };
      }
      return todo;
    }));
  }

  const onFavFilterToggle = () => {
    setShowFav(!showFav);
  }

  const onSearchInputChange = (e) => {
    setSearchInputValue(e.target.value);
  }

  const filteredTodos = todos
    .filter(todo => showFav ? todo.isFav : todo)
    .filter(todo => todo.text.trim().toLowerCase().includes(searchInputValue.trim().toLowerCase()));

  return (
    <div className="container">
      <div className="App">
        <AddTodo handleAddTodo={onAddTodoClick}/>
        <div className="wrapper">
          <div className="searchTodo">
            <button onClick={onFavFilterToggle} style={showFav ? {color: "#ffdf3a"} : {}}><AiFillStar/></button>
            <input onChange={onSearchInputChange} value={searchInputValue} type="text" placeholder="Search here..."/>
          </div>
          <div className="todos">
            {filteredTodos.map(({ id, text, date, isFav, bgColor }) => {
              return (
                <Todo id={id}
                      text={text}
                      date={date}
                      isFav={isFav}
                      bgColor={bgColor}
                      key={id}
                      handleDeleteButtonClick={onDeleteTodoClick}
                      handleTodoTextChange={onTodoTextChange}
                      handleFavTodoClick={onFavTodoClick}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
