import './App.css';
import Todos from './componenttodo/Todos';
// import Todos from './components/todos/Todos';
// import TotalFinished from './components/todos/TotalFinished';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="container">
      <p className='text-center' style={{fontSize:'30px',paddingTop:'40px',fontWeight:'bold',color:'sandybrown'}}>Todo List</p>
     <Todos/>
     <Toaster />
    </div>
  );
}

export default App;

