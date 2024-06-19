import React from 'react'
import Logo from './Logo'
import { ThemeToggler } from './ThemeToggler'
import UserButton from './UserButton'
// className=' sticky top-0 z-50 bg-white dark:bg-gray-900'
function Header() {
  return (
    <header >
        <nav className='flex flex-col sm:flex-row items-center p-5 pl-2 bg-white dark:bg-gray-900 max-w-7xl mx-auto'>

        <Logo />

        <div className='flex items-center space-x-4'>
            {/* LanguageSelect */}

            {/* Session */}


            {/* DarkModeToggle */}
            <ThemeToggler />

            {/* UserButton */}
            <UserButton />
        </div>
        </nav>
        {/* Upgade Banner */}
    </header>
  )
}

export default Header