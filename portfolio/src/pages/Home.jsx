import React from 'react'
import Navbar from '../components/Navbar'
import ThemeToggle from '../components/ThemeToggle'
import Background from '../components/Background'

const Home = () => {
    return (
        <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
            <ThemeToggle/>
            <Background />
            <Navbar />
        </div>
    )
}

export default Home
