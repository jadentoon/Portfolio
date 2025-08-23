import { Menu, X } from 'lucide-react';
import React, { useEffect, useState, useRef } from 'react'

const Navbar = () => {
    const navItems = [
        {name: "Home", href:"#hero"},
        {name: "About", href:"#about"},
        {name: "Skills", href:"#skills"},
        {name: "Projects", href:"#projects"},
        {name: "Contact", href:"#contact"},
    ]
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const menuRef = useRef(null);
    
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10)
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)){
                setMenuOpen(false);
            }
        };

        menuOpen ? 
        document.addEventListener('mousedown', handleClickOutside) :
        document.removeEventListener('mousedown', handleClickOutside)

        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [menuOpen]);

    return (
        <div>
            <nav className={`fixed w-full z-40 transition-all duration-300 
            ${scrolled ? 'py-3 bg-background/80 backdrop-blur-md shadow-xs' : 'py-5'}`}>
                <div className="container mx-auto flex justify-between items-center">
                    <a className='text-lg font-bold text-primary flex items-center' href='#hero'>
                        <span className='text-glow text-foreground'>{"<Jaden />"}</span>
                    </a>

                    <div className='hidden md:flex space-x-8'>
                        {navItems.map((item, key) => (
                            <a 
                            key={key} 
                            href={item.href}
                            className='text-foreground/80 hover:text-primary transition-colors duration-300'>
                                {item.name}
                            </a>
                        ))}
                    </div>

                    <button
                    className='cursor-pointer md:hidden p-2 text-foreground z-50'
                    onClick={() => setMenuOpen(prev => !prev)}
                    aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}>
                        {menuOpen ? <X size={24}/> : <Menu size={24}/>}
                    </button>

                    <div 
                    className={`fixed inset-0 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center 
                        transition-all duration-300 md:hidden ${menuOpen ? 
                        'opacity-100 pointer-events-auto' : 
                        'opacity-0 pointer-events-none'}`}>
                        <div ref={menuRef} className='flex flex-col space-y-8 text-xl z-50'>
                            {navItems.map((item, key) => (
                                <a 
                                key={key} 
                                href={item.href}
                                className='text-foreground/80 hover:text-primary transition-colors duration-300'
                                onClick={() => setMenuOpen(false)}>
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
