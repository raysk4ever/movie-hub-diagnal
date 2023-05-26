import { configureStore } from '@reduxjs/toolkit'
import feedReducer from './slice/feed'

// Redux Store
export default configureStore({
  reducer: { feed: feedReducer },
})
