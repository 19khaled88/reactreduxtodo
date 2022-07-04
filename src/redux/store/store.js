import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../slicer/todoSlice'

export default configureStore({
    reducer:{
        todos:todoReducer
    }
})