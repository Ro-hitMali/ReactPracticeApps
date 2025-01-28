import React from "react";
import Todo from "./Todo";
import Counter from "./Counter";
import FetchData from "./FetchData";
import Dropdown from "./Dropdown";

const App = () => {

  const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

  return(
    <div>
      <h3>Counter Application</h3>
      <Counter />
      <hr/>
      <h3>Todo Application</h3>
      <Todo />
      <hr/>
      <h3>Fetch Data with SearchBar</h3>
      <FetchData />
      <hr/>
      <h3>Dropdown Application</h3>
      <Dropdown items={items} />
    </div>
  )
}

export default App;