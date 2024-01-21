'use client';

import { Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

const ModeSwitch = () => {
    const prefersDarkMode = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = typeof window !== 'undefined' && localStorage.getItem('theme');
    const [isDark, setIsDark] = useState(storedTheme === 'light' || (!storedTheme && !prefersDarkMode));

    const handleMode = () => {
        if (isDark) {
            setIsDark(false);
            localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add('dark');
        } else {
            setIsDark(true);
            localStorage.setItem('theme', 'light');
            document.documentElement.classList.remove('dark');
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (storedTheme === 'dark' || (!storedTheme && prefersDarkMode)) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        }
    }, [storedTheme, prefersDarkMode]);

    return (
        <button
            onClick={handleMode}
            className="bg-transparent border-2 border-orange/60 hover:border-orange text-orange/60 hover:text-orange font-bold p-2 rounded-lg duration-500"
        >
            {isDark ? (
                <Sun />
            ) : (
                <Moon />
            )}
        </button>
    );
};

export default ModeSwitch;
