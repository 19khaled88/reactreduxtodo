import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name:'todos',
    initialState:[
        {id:1656932689935,title:'todo-1',completed:true},
        {id:1656932730436,title:'todo-2',completed:false},
        
    ],
    reducers:{
        addTodo:(state, action)=>{
            const newTodo={
                id:Date.now(),
                title:action.payload.title,
                completed:false,
            }
            state.push(newTodo)
        },
        toggleCompleted:(state,action)=>{
            const index = state.findIndex((todo)=>todo.id ===action.payload.id);
            state[index].completed = action.payload.completed
        },
        deleteTodo:(state,action)=>{
          return state.filter((todo)=>todo.id !== action.payload.id)
        }
    }
})


export const {addTodo,toggleCompleted,deleteTodo} = todoSlice.actions

export default todoSlice.reducer