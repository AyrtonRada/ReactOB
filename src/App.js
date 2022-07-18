import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import Contact_list from './components/container/contact_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Greeting name="Alberto"/> */}
        {/* <GreetingF name="juan"/> */}
        {/* <TaskListComponent /> */}
        <Contact_list />
      </header>
    </div>
  );
}

export default App;
