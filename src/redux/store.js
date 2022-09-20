import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todoSlice'
import bodyReducer from './todoBodyguard'

export default configureStore({
  reducer: {
    todos: todoReducer,
    bodys: bodyReducer
  },
})