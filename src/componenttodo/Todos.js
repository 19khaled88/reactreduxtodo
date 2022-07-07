import { useRef } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from 'uuid';
import { addTodo, taskSort } from "../reduxtodo/slicer/todoSlicer";
import AllTodos from "./AllTodos";
const Todos = ({children}) => {
  const titleRef = useRef('')
  const statusRef=useRef('')

  const dispatch = useDispatch()
  const allTodos = useSelector(state=>state.todo.todoList)
  const sortedTodos = [...allTodos];
  sortedTodos.sort((a,b)=>new Date(b.time) - new Date(a.time))
  
  const todoFormSubmit=(e)=>{
    e.preventDefault()
    const title = titleRef.current.value 
    const status=statusRef.current.value
    if(title && status){
       dispatch(addTodo({
        id: uuid(),
        title,
        status,
        time:new Date().toLocaleString()
       })
       )
       toast.success('New Task added!')
    }else{
      toast.error('Title should not be empty!')
    }
  }
 
 const taskStatus=(status)=>{
  dispatch(taskSort({status:status}))
 }
  return (
    <>
    <div className="px-56 flex flex-row justify-between">
      <label htmlFor="my-modal-3"  className="btn modal-button btn-active btn-primary w-24">Add</label>
      <div className="dropdown">
        <label tabIndex="0" className="btn m-1 relative">All Task
            <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <div className="badge absolute h-10 w-10 -right-4 -top-7 bg-orange-400 border-0">{allTodos.length}</div>
        </label>
        <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><a onClick={()=>taskStatus('completed')}>Completed</a></li>
          <li><a onClick={()=>taskStatus('not completed')}>Not Completed</a></li>
          <li><a onClick={()=>taskStatus('all')}>All</a></li>
        </ul>
      </div>

     

      <input type="checkbox" id='my-modal-3' className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <form onSubmit={todoFormSubmit}>
            <label htmlFor='my-modal-3' className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="text-lg font-bold">Add Task</h3>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input ref={titleRef} type="text" placeholder="Type here" className="input input-bordered" />
            </div>
            <div className="form-control pb-3">
            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select an option</label>
            <select ref={statusRef} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option defaultValue>Choose One</option>
              <option value="completed">Completed</option>
              <option value="not completed">Not compoleted</option>
            </select>
            </div>
            <button className="btn btn-sm btn-success">Add task</button>
          </form>
        </div>
      </div>  
    </div>

    <AllTodos  todos={sortedTodos}/>
     </>
  );
}

export default Todos;
