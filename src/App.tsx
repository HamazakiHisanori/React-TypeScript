import axios from "axios";
import "./styles.css";

export default function App() {
  const onClickGetData = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="App">
      <button onClick={onClickGetData}>データ取得</button>
    </div>
  );
}
