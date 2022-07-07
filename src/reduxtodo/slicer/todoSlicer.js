import { createSlice } from '@reduxjs/toolkit';

const getInitialTodo=()=>{
  const localTodoList = window.localStorage.getItem('todoList');

  if(localTodoList){
    return JSON.parse(localTodoList)
  }

  localStorage.setItem('todoList',JSON.stringify([]))
  return []
}

const initialValue={
    todoList: getInitialTodo(),
}

export const todoSlicer = createSlice({
    name:'todo',
    initialState:initialValue,
    reducers:{
        addTodo:(state,action)=>{
            state.todoList.push(action.payload)
            const todoList = window.localStorage.getItem('todoList');
            if(todoList){
                const todoListArr = JSON.parse(todoList)
                todoListArr.push({
                    ...action.payload
                })
                window.localStorage.setItem('todoList',JSON.stringify(todoListArr))
            }
        },

        deleteTodo:(state,action)=>{
            const todoList = localStorage.getItem('todoList');
            if(todoList){
                const todoListArr = JSON.parse(todoList)
                todoListArr.forEach((todo,index) => {
                    if(todo.id === action.payload){
                        todoListArr.splice(index,1)
                    }
                });
                localStorage.setItem('todoList', JSON.stringify(todoListArr))
                state.todoList = todoListArr
            }
        },

        updateTodo:(state,action)=>{
            const todoList = localStorage.getItem('todoList');
           
            if(todoList){
                const todoListArr = JSON.parse(todoList);
                todoListArr.forEach((todo,index)=>{
                    if(todo.id === action.payload.id){
                        todo.title = action.payload.title;
                        todo.status=action.payload.status;
                    }
                })
                localStorage.setItem('todoList',JSON.stringify(todoListArr))
                state.todoList = todoListArr
            }
        },
        taskSort:(state,action)=>{
            const todoList = JSON.parse(localStorage.getItem('todoList'))
            const filtered = todoList.filter((todo)=>todo.status === action.payload.status)
            if(action.payload.status === 'completed' || action.payload.status === 'not completed'){
                state.todoList = filtered
            }else if(action.payload.status === 'all'){
                state.todoList = todoList
            }
        }
    }
})

export const {addTodo,deleteTodo,updateTodo,taskSort} = todoSlicer.actions;
export default todoSlicer.reducer