import React from 'react'
import { NavLink,Link } from 'react-router-dom'
const Head = () => {
  return (
    <>
    <div>
        <Link to='/'><h1 className='sm:text-[30px] sm:mx-5 sm:my-6 title pb-4'>Myntra</h1>
        </Link><div>
            <nav>
                <ul className='list-none flex sm:gap-8 sm:mx-2 nav'>
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
