import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import moment from "moment"; // 시간 모듈
import styles from "./Todo.module.css";

function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setTodos(data);
      });
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("onSubmit Click");

    setTodos((currentTodos) => [...currentTodos, todo]);
    setTodo("");

    console.log(todos);
  };

  return (
    <div>
      <button>Add todo</button>
      {todos.map((item) => {
        console.log(item);
        // return <li key={index}>{item}</li>;
        // 역순으로 하는 것도 고민해보기
        // <TodoItem key={index} text={item} index={index} name="김인섭" />
        return (
          <TodoItem
            key={item.id}
            id={item.id}
            userId={item.userId}
            title={item.title}
          />
        );
      })}
    </div>
  );
}
// const TodoList = (props) => {
//   const nowTime = moment().format("YYYY-MM-DD HH:mm:ss");
//   console.log(props);
//   return (
//     <div className={styles.todoList}>
//       <h3>
//         {props.userId}님의 {props.num}번째 todo list 입니다.
//       </h3>
//       <li>{props.title}</li>
//       <div>성공 유무: {`${props.completed}`}</div>
//       <p>작성한 시간: {nowTime}</p>
//     </div>
//   );
// };

export default Todo;
