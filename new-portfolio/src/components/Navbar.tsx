import React from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'

function Navbar() {
  return (
    <div className={`${styles.paddingX} w-full flex justify-between max-w-full mx-auto items-center py-5 fixed top-0 z-20`}>
        <Link to='/'>
            <div className='text-[35px] cursor-pointer font-bold text-white font-asap'>HANSOO YOON</div>
        </Link>
        <div>
            <ul className='flex'>
                <li>About</li>
                <li>Resume</li>
                <li>Github</li>
                <li>LinkedIn</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar