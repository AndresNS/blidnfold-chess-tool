import "./App.css";

// Components
import SearchBar from "./components/widgets/SearchBar";
import Shortcuts from "./components/widgets/Shortcuts";
// import ToDoList from "./components/widgets/ToDoList";
import MTGACodes from "./components/widgets/MTGACodes";

function App() {
  return (
    <div className="root">
      <div className="container">
        <SearchBar className="root__search-bar" />
        <Shortcuts />
        <MTGACodes />
        {/* <ToDoList /> */}
      </div>
    </div>
  );
}

export default App;
