import './App.css';
import Todos from './components/todos/Todos';

function App() {
  return (
    <div className="App">
      <p style={{fontSize:'30px',paddingTop:'40px',fontWeight:'bold',color:'sandybrown'}}>Todo List</p>
      <Todos />
    </div>
  );
}

export default App;
