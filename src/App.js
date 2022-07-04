import './App.css';
import Todos from './components/todos/Todos';
import TotalFinished from './components/todos/TotalFinished';

function App() {
  return (
    <div className="App">
      <p style={{fontSize:'30px',paddingTop:'40px',fontWeight:'bold',color:'sandybrown'}}>Todo List</p>
      <Todos />
      <TotalFinished />
    </div>
  );
}

export default App;
