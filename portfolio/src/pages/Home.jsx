import React from 'react'
import Navbar from '../components/Navbar'
import ThemeToggle from '../components/ThemeToggle'

const Home = () => {
    return (
        <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
            <ThemeToggle/>
        </div>
    )
}

export default Home
