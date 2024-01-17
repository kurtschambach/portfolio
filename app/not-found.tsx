import Link from "next/link";

export default function NotFound() {
	return (
		<div className='w-full h-full flex flex-col items-center justify-center text-text text-center bg-dark-bg gap-2 rounded-3xl'>
			<h2 className='text-hover font-bold text-xl'>Not Found</h2>
			<Link
				href="/"
				className='p-2 px-3 text-text bg-text/10 border-2 border-text rounded-lg my-6'
			>
				Return Home
			</Link>
			<div className='w-full md:w-3/4'>
				<div className="w-full pb-[43%] relative">
					<iframe
						src="https://giphy.com/embed/3o7aTskHEUdgCQAXde"
						width="100%"
						height="100%"
						className="absolute"
						allowFullScreen
					/>
					<div className='w-full h-full absolute z-10 bg-transparent' />
				</div>
				<Link href="https://giphy.com/" className='text-text mt-2'>
					by GIPHY
				</Link>
			</div>
		</div>
	);
}
