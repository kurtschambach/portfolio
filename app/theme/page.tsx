export default function Theme() {
	return (
		<div className="bg-bg w-full h-fit flex flex-col items-start justify-center">
			<div className="w-36 h-52 p-6 rounded-2xl bg-dark-bg flex flex-col items-center justify-start">
				<span className="absolute flex flex-col items-center justify-center min-w-24 px-4 h-10 rounded-full bg-primary font-bold text-sm text-dark-bg">
					#43FFAF
				</span>
				<span className="absolute flex flex-col items-center justify-center min-w-24 px-4 h-10 rounded-full translate-y-8 bg-violet font-bold text-sm text-dark-bg">
					#C061CB
				</span>
				<span className="absolute flex flex-col items-center justify-center min-w-24 px-4 h-10 rounded-full translate-y-16 bg-text font-bold text-sm text-dark-bg">
					#526777
				</span>
				<span className="absolute flex flex-col items-center justify-center min-w-24 px-4 h-10 rounded-full translate-y-24 bg-bg font-bold text-sm text-violet">
					#262a33
				</span>
				<span className="absolute flex flex-col items-center justify-center min-w-24 px-4 h-10 rounded-full translate-y-32 bg-dark-bg font-bold text-sm text-primary">
					#1F232C
				</span>
			</div>
		</div>
	);
}
