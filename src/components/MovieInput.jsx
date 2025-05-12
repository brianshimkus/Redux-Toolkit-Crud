import { useState } from 'react'
import { addMovie } from '../movieSlice'
import { useDispatch } from 'react-redux'

export const MovieInput = () => {
	const [newMovie, setNewMovie] = useState('')

	const dispatch = useDispatch()

	const handleAddMovie = () => {
		if (newMovie) {
			dispatch(addMovie(newMovie))
			setNewMovie('')
		}
	}
	return (
		<>
			<div className='flex items-center justify-between mb-4'>
				<h1 className='text-2xl font-bold text-slate-200'>
					Movie list using Redux
				</h1>
			</div>
			<input
				className='bg-slate-600 p-2 rounded-md border-2 border-slate-700 text-slate-200 outline-none focus:border-slate-500 w-full'
				placeholder='Add a new movie'
				onChange={(e) => setNewMovie(e.target.value)}
				value={newMovie}
			/>
			<button
				className='bg-green-400 hover:bg-green-300 text-green-800 font-bold py-2 px-4 rounded cursor-pointer transition duration-200 ease-in-out mt-2 w-full'
				onClick={handleAddMovie}>
				Add Movie
			</button>
		</>
	)
}
