import { Link } from './components/Link'
import { MovieInput } from './components/MovieInput'
import { MovieList } from './components/MovieList'

function App() {
	return (
		<div className='bg-slate-900 min-h-screen text-slate-200 flex items-center justify-center'>
			<div className='bg-slate-800 p-12 rounded-md border-2 border-slate-700'>
				<MovieInput />
				<hr className='my-4 bg-slate-700 h-1 border-none' />
				<MovieList />
				<hr className='my-8 bg-slate-700 h-1 border-none' />
				<Link />
			</div>
		</div>
	)
}

export default App
