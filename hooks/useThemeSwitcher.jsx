import { useEffect, useState } from 'react';

const useThemeSwitcher = () => {
    // 1. Initialize theme state to `undefined` or a neutral value.
    //    This signals that the theme hasn't been resolved yet (especially on the server).
    const [theme, setThemeState] = useState(undefined); 

    // 2. useEffect to read from localStorage or system preference ONLY on the client-side.
    //    This runs once after the component mounts and hydrates.
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedTheme = localStorage.getItem('theme');
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

            if (storedTheme) {
                setThemeState(storedTheme); // Use stored theme
            } else if (prefersDark) {
                setThemeState('dark'); // Use system preference
            } else {
                setThemeState('light'); // Default to light
            }
        }
    }, []); // Empty dependency array means this runs once on client mount

    // 3. useEffect to apply classes to document.documentElement and update localStorage.
    //    This runs whenever the 'theme' state changes (after initial resolution or user click).
    useEffect(() => {
        if (typeof window !== 'undefined' && theme !== undefined) { // Only run if theme is resolved
            const root = window.document.documentElement;
            
            // Remove both classes first to ensure only the correct one is applied
            root.classList.remove('light', 'dark'); 
            root.classList.add(theme);
            localStorage.setItem('theme', theme);
        }
    }, [theme]); // Dependency on 'theme' ensures this effect reacts to theme changes

    // Function to toggle the theme between 'light' and 'dark'
    const toggleTheme = () => {
        setThemeState(prevTheme => {
            const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
            return newTheme;
        });
    };

    // Return the current theme and the toggle function
    // 'theme' is the actual current theme ('light' or 'dark')
    // 'toggleTheme' is the function to switch it
    return [theme, toggleTheme];
};

export default useThemeSwitcher;