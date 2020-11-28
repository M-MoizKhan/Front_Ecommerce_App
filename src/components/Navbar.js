import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return(
        <div>
        <nav className='nav'>
            <h1 className='title'> KhanBaba </h1>
            <span className='cart'>
            <Link to='cart'>
                 Cart
            </Link>
            </span> 
                <span className='cartcount'>
                    0
                </span>
        </nav>
        </div>
    )
}
export default Navbar;