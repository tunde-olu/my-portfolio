import { useState } from "react"
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from "react-scroll"


const Navbar = () => {
    const [nav, setNav] = useState(false)

    const links = [
        { id: 1, link: 'home' },
        { id: 2, link: 'about' },
        { id: 3, link: 'portfolio' },
        { id: 4, link: 'skills' },
        { id: 5, link: 'contact' },
        { id: 6, link: 'Resumé', href: '/resume/tunde-olu-resume.pdf', download: true },
    ]
    return (
        <nav className="z-10 flex justify-between items-center w-full h-20 text-white fixed bg-black px-4">
            <div>
                <h1 className="font-signature text-3xl ml-5 text-slate-400">Tunde Olu</h1>
            </div>
            <ul className="hidden md:flex">
                {links.map(({ id, link, href }) => (
                    <li key={id} className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-110 duration-200">{id !== 6 ? <Link to={link} smooth duration={2000} onClick={() => setNav(false)}>{link}</Link> : <a href={href}>{link}</a>}</li>
                ))}
            </ul>
            <button onClick={() => setNav((prev) => !prev)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
                {
                    nav ? <FaTimes size={30} /> :
                        <FaBars size={30} />
                }
            </button>
            {nav && <ul className="flex flex-col items-center list-none justify-center space-y-6 absolute  top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 md:hidden">
                {links.map(({ id, link, href }) => (
                    <li key={id} className="px-4 cursor-pointer capitalize font-medium text-3xl text-gray-400">{id !== 6 ? <Link to={link} smooth duration={2000} onClick={() => setNav(false)}>{link}</Link> : null}</li>
                ))}
            </ul>}

        </nav>
    )
}
export default Navbar