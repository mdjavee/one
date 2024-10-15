import React from 'react'
import { NavLink,Link } from 'react-router-dom'
const Head = () => {
  return (
    <>
    <div>
        <Link to='/'><h1 className='xs:text-[40px] xs:mx-5 xs:my-6 title pb-4'>Myntra</h1>
        </Link><div>
            <nav>
                <ul className='list-none flex xs:gap-3 xs:mx-4 xs:text-[19px]'>
                    <li><NavLink to='/Men'>Men</NavLink></li>
                    
                    <li><NavLink to='/Women'>Women</NavLink></li>
                    
                    <li><NavLink to='/Kids'>Kids</NavLink></li>
                    
                    <li><NavLink to='/Grocery'>Grocery</NavLink></li>
                    
                    <li><NavLink to='/Devices'>Devices</NavLink></li>
                </ul>
            </nav>
        </div>
    </div>
    </>
  )
}

export default Head
