import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getTodosAsync = createAsyncThunk('todos/getTodosAsync',
    async ()=>{
        const response = await fetch('http://localhost:3000/todos');
        if(response.ok){
            const todos = await response.json();
            
            return {todos}
        }
    }
)

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
    },
    extraReducers:{
        [getTodosAsync.pending] :(state, action)=>{
            console.log('fetching data....')
         },
        [getTodosAsync.fulfilled] :(state, action)=>{
            console.log('fetched data....')
           return action.payload.todos 
        }
    }
})


export const {addTodo,toggleCompleted,deleteTodo} = todoSlice.actions

export default todoSlice.reducer