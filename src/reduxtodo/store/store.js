import { configureStore } from '@reduxjs/toolkit'

import todoReducer from '../slicer/todoSlicer'

export const store = configureStore({
    reducer:{
        todo:todoReducer,
    }
})