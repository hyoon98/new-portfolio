import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { useState } from 'react'

type NavLink = {
    name: string,
    icon: boolean,
    path: string,
    iconPath?: string,
    onHover?: string,
}

function Navbar() {
    const [menu, setMenu] = useState(false)

    const links: NavLink[] = [
        { name: 'About', icon: false, path: '/about' },
        { name: 'Resume', icon: false, path: '/Hansoo_Yoon_Resume.pdf' },
        { name: 'Github', icon: true, path: 'https://github.com/hyoon98', iconPath: "/icons8-github.svg", onHover: "/icons8-github-grey.svg" },
        { name: 'LinkedIn', icon: true, path: 'https://www.linkedin.com/in/hansoo-yoon-557265195/', iconPath: "/icons8-linkedin.svg", onHover: "/icons8-linkedin-grey.svg" },
    ]

    return (
        <div className={`${styles.paddingX} w-full flex justify-between max-w-full mx-auto items-center py-5 fixed z-50 bg-opacity-80 top-0`}>
            <Link to='/'>
                <div className='text-[35px] cursor-pointer font-bold text-white font-asap'>HANSOO YOON</div>
            </Link>
            <ul className={`hidden sm:flex flex-row gap-4`}>
                {links.map((link) => (link.icon ?
                    <a href={link.path}>
                        <img src={link.iconPath || ""} onMouseEnter={e => e.currentTarget.src = link.onHover || ""} onMouseLeave={e => e.currentTarget.src = link.iconPath || ""} alt={link.name} className='w-8 h-8' />
                    </a>
                    :
                    <Link to={link.path} {...(link.name === "Resume" ? { target: "_blank", rel: "noreferrer" } : {})}>
                        <li className={`mx-3 text-white transition hover:text-[#808080] font-lato font-bold`}>{link.name}</li>
                    </Link>
                ))}
            </ul>
            <div className='sm:hidden flex flex-1 justify-end items-center'>
                <img src={menu ? '/close.svg' : '/hamburger.svg'} className='w-8 h-8 mx-2 cursor-pointer' onClick={
                    () => setMenu(!menu)
                } />
                <ul className={`${menu ? "flex" : "hidden"} flex-col fixed left-0 right-0 top-[92px] h-[calc(100vh-92px)] items-center justify-top gap-6 bg-opacity-30`}>
                    {links.map((link) => (link.icon ?
                        <a href={link.path}>
                            <img src={link.iconPath || ""} onMouseEnter={e => e.currentTarget.src = link.onHover || ""} onMouseLeave={e => e.currentTarget.src = link.iconPath || ""} alt={link.name} className='w-8 h-8' />
                        </a>
                        :
                        <Link to={link.path} {...(link.name === "Resume" ? { target: "_blank", rel: "noreferrer" } : {})}>
                            <li className={`mx-3 text-white text-xl transition hover:text-[#808080] font-lato font-bold`} onClick={
                                () => setMenu(false)
                            }>{link.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Navbar