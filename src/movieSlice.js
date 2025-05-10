import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	movies: [
		{ id: '1', name: 'Inception', year: 2010 },
		{ id: '2', name: 'Interstellar', year: 2014 },
	],
}

const movieSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {
		addMovie: (state, action) => {
			state.movies.push(action.payload)
		},
		removeMovie: (state, action) => {},
	},
})

export const { addMovie, removeMovie } = movieSlice.actions
export default movieSlice.reducer
