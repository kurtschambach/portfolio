"use client";

import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

// This code is a little bit hard to undetstand, as the dark useState (and every other dark) means, that the theme is dark,
// but when the theme is dark we'll remove "dark" from the classList, and on light mode, we'll add "dark",
// This is because we want to have dark as the default mode, and when you use `bg-light dark:bg-dark` in your tailwind,
// tailwind sometimes needs some time to get to the dark mode when rendering the page.
// Because of this we are using `bg-dark dark:bg-light`, even if it's a little bit unintuitive

const ModeSwitch = () => {
	let prefersDarkMode = false;
	let storedTheme: string | null = null;

	useEffect(() => {
		if (typeof window !== "undefined") {
			prefersDarkMode = window.matchMedia(
				"(prefers-color-scheme: dark)",
			).matches;
			storedTheme = localStorage.getItem("theme");
		}
	}, []);

	const [isDark, setIsDark] = useState<boolean>(
		storedTheme === "dark" || (!storedTheme && prefersDarkMode),
	);

	const handleMode = () => {
		if (isDark) {
			setIsDark(false);
			localStorage.setItem("theme", "light");
			document.documentElement.classList.add("dark");
		} else {
			setIsDark(true);
			localStorage.setItem("theme", "dark");
			document.documentElement.classList.remove("dark");
		}
	};

	useEffect(() => {
		if (typeof window !== "undefined") {
			if (storedTheme === "dark" || (!storedTheme && prefersDarkMode)) {
				document.documentElement.classList.add("dark"); // i.e. switch to light mode
			} else {
				document.documentElement.classList.remove("dark"); // i.e. switch to dark mode
			}
		}
	}, [storedTheme, prefersDarkMode]);

	return (
		<button
			onClick={handleMode}
			className="bg-transparent border-2 border-orange/60 hover:border-orange dark:border-text dark:hover:border-dark-bg text-orange/60 hover:text-orange dark:text-text dark:hover:text-dark-bg font-bold p-2 rounded-lg duration-500"
		>
			{isDark ? <Sun /> : <Moon />}
		</button>
	);
};

export default ModeSwitch;
