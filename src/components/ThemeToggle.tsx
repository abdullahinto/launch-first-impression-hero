
import React from 'react';
import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const cycleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="w-5 h-5" />;
      case 'dark':
        return <Moon className="w-5 h-5" />;
      default:
        return <Monitor className="w-5 h-5" />;
    }
  };

  return (
    <button
      onClick={cycleTheme}
      className="p-2 rounded-lg backdrop-blur-sm bg-white/20 dark:bg-white/10 border border-white/30 dark:border-white/20 hover:bg-white/30 dark:hover:bg-white/20 transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      <div className="group-hover:rotate-12 transition-transform duration-300">
        {getIcon()}
      </div>
    </button>
  );
};

export default ThemeToggle;
