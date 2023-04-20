import React, { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
const ToggleThemeButton = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="bg-dot-bglight_secondary dark:bg-dot-bgdark_secondary inline-block fixed bottom-6 right-14 p-4 rounded-md"
    >
      {darkMode ? (
        <SunIcon className="h-6 w-6 text-dot-bgdark dark:text-dot-bglight" />
      ) : (
        <MoonIcon className="h-6 w-6 text-dot-bgdark dark:text-dot-bglight" />
      )}

    </button >
  );
};

export default ToggleThemeButton;