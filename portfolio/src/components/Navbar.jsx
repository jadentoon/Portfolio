import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const navItems = [
        {name: "Home", href:"#hero"},
        {name: "About", href:"#about"},
        {name: "Skills", href:"#skills"},
        {name: "Projects", href:"#projects"},
        {name: "Contact", href:"#contact"},
    ]
    const [scrolled, setScrolled] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10)
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
                </div>
            </nav>
        </div>
    )
}

export default Navbar
