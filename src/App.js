import "./styles.css";
function List() {
  return (
    <ul>
      <li>List</li>
    </ul>
  );
}

function Todo() {
  return (
    <>
      Todo
      <List />
    </>
  );
}
function Goal() {
  return (
    <>
      Goal
      <List />
    </>
  );
}

export default function App() {
  return (
    <div className="App">
      <Goal />
      <Todo />
    </div>
  );
}
