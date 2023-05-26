/**
 * Redux Slice for Managing Feed State
 */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { FETCH_POSTS } from '../customActions'

// Initial Redux State
const initialState = {
  movies: [],
  searchedMovies: [],
  page: 1,
  total: 0,
  status: 'idle',
  error: null,
  hasMore: false,
  isSearchMode: false,
  search: '',
  searchMovieFound: null
}

// Async Thunk for Fetching Movies based on the current Page
export const fetchMovies = createAsyncThunk(FETCH_POSTS, async (args, { getState, dispatch }) => {
  const { feed } = getState()
  dispatch(nextPage())
  const response = await axios.get(`API/CONTENTLISTINGPAGE-PAGE${feed.page}.json`)
  return response.data
})

export const feed = createSlice({
  name: 'feed',
  initialState,
  reducers: {
    nextPage(state) {
      state.page += 1
      return state
    },
    setSearch(state, action) {
      state.search = action.payload
      return state
    },
    moviesByName(state) {
      // must have a search value to filter out the movie items
      if (state.search) {
        // using regex based search
        const nameRegex = new RegExp(`${state.search}`, 'ig')
        state.searchedMovies = state.movies.filter(movie => movie.name.match(nameRegex))
        if (state.searchedMovies.length === 0) {
          state.searchMovieFound = false
        }
        return state
      }
      // rendering all the current loaded movies (client)
      state.searchedMovies = state.movies
      return state
    },
    toggleSearch(state) {
      state.isSearchMode = !state.isSearchMode
      state.search = ''
      state.searchedMovies = []
      return state
    }
  },
  // Keeping tracking for fetch Movies Network Request
  extraReducers(builder) {
    builder
      .addCase(fetchMovies.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded'
        const { page } = action.payload
        state.total = page['total-content-items']
        state.movies = state.movies.concat(page['content-items'].content)
        state.hasMore = !!(state.total - state.movies.length)
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

// Action creators are generated for each case reducer function
export const { nextPage, setSearch, toggleSearch, moviesByName } = feed.actions

export default feed.reducer
