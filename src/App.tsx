import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";

const App = () => {
  return (
    <div className="app">
      <TaskForm></TaskForm>
      <main className="app_main">
        <TaskColumn title="To Do" icon={todoIcon}></TaskColumn>
        <TaskColumn title="Doing" icon={doingIcon}></TaskColumn>
        <TaskColumn title="Done" icon={doneIcon}></TaskColumn>
      </main>
    </div>
  );
};

export default App;
