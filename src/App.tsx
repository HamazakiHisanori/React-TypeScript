import axios from "axios";
import { useState } from "react";
import "./styles.css";

import { Todo } from "./Todo";
import { TodoType } from "./types/todo";
import { Text } from "./Text";
import { UserProfile } from "./UserProfile";
import { User } from "./types/user";

const user: User = {
  name: "sample",
  hobbies: ["ゲーム", "映画"]
};

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const onClickGetData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };

  return (
    <div className="App">
      <UserProfile user={user} />
      <Text color="red" fontSize="24px" />
      <button onClick={onClickGetData}>データ取得</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}
