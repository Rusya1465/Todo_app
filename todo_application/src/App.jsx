import { useState } from "react";
import Header from "./components/header/header";
import "./App.css";
import Todos from "./components/todos_container/todos_container";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Todos />
    </div>
  );
}

export default App;
