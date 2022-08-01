import logo from './logo.svg';
import './App.css';
import './style/task.scss'
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import Contact_list from './components/container/contact_list';
import Greeting_styled from './components/pure/greetingStyled';
import Life_cycle from './hooks/life_cycle';
import Element_component from './components/pure/element_component';
import Login_form from './components/pure/forms/loginFormik';
import Register_formik from './components/pure/forms/registerFormik';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Greeting name="Alberto"/> */}
        {/* <GreetingF name="juan"/> */}
        {/* <TaskListComponent /> */}
        {/* <Contact_list /> */}
        {/* <Greeting_styled name="Ayrton" /> */}
        {/* <Life_cycle/> */}
        {/* </header> */}
        {/* <Element_component/> */}
        {/* <Login_form /> */}
        <Register_formik/>
    </div>
  );
}

export default App;
