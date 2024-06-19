import React from 'react'
import Logo from './Logo'
import { ThemeToggler } from './ThemeToggler'

function Header() {
  return (
    <header>
        <nav className='flex flex-col sm:flex-row items-center p-5 pl-2 bg-white dark:bg-gray-900 max-w-7xl mx-auto'>

        <Logo />

        <div>
            {/* LanguageSelect */}

            {/* Session */}


            {/* DarkModeToggle */}
            <ThemeToggler />
        </div>
        </nav>
        {/* Upgade Banner */}
    </header>
  )
}

export default Header