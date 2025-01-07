import { useEffect, useState } from 'react';
import './darkmode.css'
import { IconMoon, IconSun } from '@tabler/icons-react';
function Darkmode() {
    const [isDarkMode, setIsDarkMode] = useState(false);
  
    useEffect(() => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        setIsDarkMode(savedTheme === 'dark');
      }
    }, []);
  
    // Cambiar el tema
    const toggleTheme = () => {
      const newTheme = !isDarkMode ? 'dark' : 'light';
      setIsDarkMode(!isDarkMode);
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme); 
    };
  
    return (
      <div onClick={toggleTheme} style={{ cursor: 'pointer' }}>
        {isDarkMode ? (
            <IconMoon stroke={2} size={20} />
        ) : (
            <IconSun stroke={2} size={20} />
        )}
      </div>
    );
  }
  export default Darkmode;