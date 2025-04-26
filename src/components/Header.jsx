
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import Lottie from 'lottie-react';
import sunAnimation from '../assets/SunAnimation.json';
import moonAnimation from '../assets/MoonAnimation.json';

const Header = ({ navLinks }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === 'dark';

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`transition-colors duration-500 ease-in-out sticky top-0 z-[1000] px-4 py-4 shadow-md ${
        isDark ? 'bg-zinc-900 text-zinc-100' : 'bg-white text-black'
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a
          href="https://refiningskills.org"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block transition-transform duration-300 hover:scale-110"
        >
          <img
            src="https://refiningskills.org/wp-content/uploads/2024/12/RS-logo.png"
            alt="Refining Skills Logo"
            className="w-24 h-auto"
          />
        </a>

        {/* Theme Toggle */}
        <div
          className="cursor-pointer"
          onClick={toggleTheme}
          style={{ width: 50, height: 50 }}
        >
          <Lottie
            animationData={isDark ? sunAnimation : moonAnimation}
            loop={false}
            autoplay={true}
          />
        </div>

        {/* Navigation */}
        <nav aria-label="Main navigation">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden bg-orange-500 text-white text-2xl px-3 py-1 rounded"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>

          {/* Menu Items */}
          <ul
            className={`${
              isMenuOpen ? 'flex' : 'hidden'
            } md:flex flex-col md:flex-row absolute md:static top-full left-0 right-0 ${
              isDark ? 'bg-zinc-900' : 'bg-white'
            } md:bg-transparent md:shadow-none shadow-lg p-4 md:p-0 list-none m-0 text-center text-xl transition-all duration-300`}
          >
            {navLinks.map((link, index) => (
              <li key={index} className="my-2 md:my-0 md:ml-8">
                <NavLink
                  to={link.url}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `no-underline font-medium transition-colors ${
                      isDark ? 'text-zinc-100' : 'text-gray-800'
                    } hover:text-blue-500 ${
                      isActive ? 'text-blue-500 font-bold' : ''
                    }`
                  }
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

