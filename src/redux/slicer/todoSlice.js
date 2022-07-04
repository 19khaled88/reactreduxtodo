import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name:'todos',
    initialState:[
        {id:1,title:'todo-1',completed:true},
        {id:2,title:'todo-2',completed:false},
        {id:3,title:'todo-3',completed:false},
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