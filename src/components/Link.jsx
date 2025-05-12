export const Link = () => {
	return (
		<>
			<h1 className='font-bold text-green-400 hover:text-green-300 transition duration-200 ease-in-out'>
				<a
					href='https://github.com/brianshimkus/Redux-Toolkit-Crud'
					className='flex items-center text-md'
					target='_blank'>
					Link to GitHub repository{' '}
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='size-6 ml-2'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25'
						/>
					</svg>
				</a>
			</h1>
		</>
	)
}
