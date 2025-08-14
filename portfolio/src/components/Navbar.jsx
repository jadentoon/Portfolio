import React from 'react'

const navbar = () => {
  return (
    <div>
        <nav className="p-4">
            <div className="container mx-auto flex justify-between items-center">  
                <div className="text-gray-700 text-lg font-bold">
                    {"<Jaden />"}
                </div>
                <ul className="flex space-x-4">
                    {["Home", "About", "Projects", "Contact"].map((item) => (
                        <li
                        key={item}
                        >
                            <a
                            href={`#${item}`}
                            className='text-gray-900 hover:text-gray-400'>
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>        
    </div>
  )
}

export default navbar
