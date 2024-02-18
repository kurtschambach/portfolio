"use client";

import { ThumbsDown, ThumbsUp } from "lucide-react";
import { useEffect, useState } from "react";

const ThumbsUpDown = ({ articleSlug }: { articleSlug: string }) => {
	const [likes, setLikes] = useState(0);
	const [dislikes, setDislikes] = useState(0);
	const [alreadyVoted, setAlreadyVoted] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`/api/get-likes/${articleSlug}`);
			if (!response.ok) {
				console.error("failed to fetch likes");
			} else {
				const data = await response.json();
				setLikes(data.likes);
				setDislikes(data.dislikes);
			}
		};

		fetchData();
	}, []);

	useEffect(() => {
		const votedStorage = localStorage.getItem(`voted-${articleSlug}`);
		if (!votedStorage) {
			setAlreadyVoted(false);
		}
	}, []);

	const like = async () => {
		if (!alreadyVoted) {
			setLikes((prevNumber) => prevNumber + 1);
			await fetch(`/api/like/${articleSlug}`);
			localStorage.setItem(`voted-${articleSlug}`, "true");
			setAlreadyVoted(true);
		}
	};

	const dislike = async () => {
		if (!alreadyVoted) {
			setDislikes((prevNumber) => prevNumber + 1);
			await fetch(`/api/dislike/${articleSlug}`);
			localStorage.setItem(`voted-${articleSlug}`, "true");
			setAlreadyVoted(true);
		}
	};

	return (
		<div className="w-fit h-fit flex flex-row items-center justify-center gap-4 pb-12">
			<div className="w-fit h-fit flex flex-col items-end justify-center gap-2">
				<button
					onClick={like}
					className="bg-transparent border-2 border-primary/60 hover:border-primary dark:border-text dark:hover:border-dark-bg text-primary/60 hover:text-primary dark:text-text dark:hover:text-dark-bg font-bold p-2 rounded-lg duration-500"
				>
					<ThumbsUp />
				</button>
				<p className="text-xs text-primary dark:text-text mr-1">{likes}</p>
			</div>
			<div className="w-fit h-fit flex flex-col items-start justify-center gap-2">
				<button
					onClick={dislike}
					className="bg-transparent border-2 border-violet/60 hover:border-violet dark:border-text dark:hover:border-dark-bg text-violet/60 hover:text-violet dark:text-text dark:hover:text-dark-bg font-bold p-2 rounded-lg duration-500"
				>
					<ThumbsDown />
				</button>
				<p className="text-xs text-violet dark:text-text ml-1">{dislikes}</p>
			</div>
		</div>
	);
};

export default ThumbsUpDown;
