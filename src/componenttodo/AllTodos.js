import { format } from "date-fns";
import { useRef, useState } from "react";
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from "../reduxtodo/slicer/todoSlicer";
const AllTodos = ({todos}) => {
    const [editableItem,setEditableItem] = useState('')
    const [editId,setEditId] = useState('')
    const [editDisable,setEditDisable] = useState(true)
    const titleRef = useRef('')
    const statusRef=useRef('')
    const dispatch = useDispatch()
    const deleteHandler=(id)=>{
        dispatch(deleteTodo(id))
    }
    const editHandler=(id)=>{
      const todosInLS =  JSON.parse(localStorage.getItem('todoList'))
      const findItemAsId =  todosInLS.find(todo=>todo.id === id)
      setEditableItem(findItemAsId)
     
      setEditId(id)
    }
   
    const todoEditFormSubmit=(e)=>{
        e.preventDefault()
        const title = titleRef.current.value;
        const status = statusRef.current.value;
        if(title || status){
            dispatch(updateTodo({
                title,status,id:editId
            }))
        toast.success('Task updated!')
        
        }else{
            toast.error('No any updated happed!')
        }
    }

  return (
    <>
    <div className="overflow-x-auto">
        <table className="table w-full">
        
            <thead>
            <tr>
                <th className="text-lg">ID</th>
                <th className="text-lg">Title</th>
                <th className="text-lg">Status</th>
                <th className="text-lg">Time</th>
                <th className="text-lg">Delete</th>
                <th className="text-lg">Edit</th>
            </tr>
            </thead>
            <tbody>
            {
              todos.length>0 ?  todos.map(todo=> 
                    <tr key={todo.id}>
                        <th>{todo.id}</th>
                        <td>{todo.title}</td>
                        <td>{todo.status}</td>
                        <td>{format(new Date(todo.time),'p, MM/dd/yyyy')}</td>
                        <td><button onClick={()=>deleteHandler(todo.id)} className="btn btn-warning btn-sm">Delete</button></td>
                        <td><label htmlFor='my-modal-2' onClick={()=>editHandler(todo.id)} className="btn modal-button btn-accent btn-sm">Edit</label></td>
                    </tr>)
                    :<tr>
                    <td>No Todos</td>
                    </tr>
            }
                   
            </tbody>
        </table>
     </div>

     {
           
      <>      
     <input type="checkbox" id='my-modal-2' className="modal-toggle" />
     <div className="modal">
       <div className="modal-box relative">
         <form onSubmit={todoEditFormSubmit}>
           <label htmlFor='my-modal-2' className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
           <h3 className="text-lg font-bold">Edit Task</h3>
           <div className="form-control">
             <label className="label">
               <span className="label-text">Title</span>
             </label>
             <input  type="text" ref={titleRef} placeholder="Type here" className="input input-bordered" defaultValue={editableItem.title} />
           </div>
           <div className="form-control pb-3">
           <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select an option</label>
           <select  id="countries" ref={statusRef} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
             <option defaultValue>{editableItem.status}</option>
           
             <option value={editableItem.status === 'completed' ? 'not completed':'completed'}>{editableItem.status === 'completed'? 'not completed':'completed'}</option>
           </select>
           </div>
           <button  className="btn btn-sm btn-success">Edit task</button>
         </form>
       </div>
     </div> </> 
    }
     </>
  );
}

export default AllTodos;
