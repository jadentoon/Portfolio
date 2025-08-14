import { Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setIsDark(true);
            document.documentElement.classList.add("dark");
        } else {
            setIsDark(false);
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggle = () => {
        if (isDark){
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light")
            setIsDark(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark")
            setIsDark(true);
        }
    };

    return (
        <button
        className='fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full
            transition-colors duration-300 focus:outline-hidden cursor-pointer'
        onClick={toggle}
        >
            {isDark ? 
            <Sun className='h-6 w-6 text-yellow-300'/> :
            <Moon className='h-6 w-6 text-blue-900' />
            }
        </button>
    )
}

export default ThemeToggle
