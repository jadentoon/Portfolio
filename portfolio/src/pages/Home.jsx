import React from 'react'
import Navbar from '../components/Navbar'
import ThemeToggle from '../components/ThemeToggle'
import Background from '../components/Background'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'


const Home = () => {
    return (
        <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
            <ThemeToggle/>
            <Background />
            <Navbar />
            <main>
                <HeroSection />
                <AboutSection />
            </main>
        </div>
    )
}

export default Home
