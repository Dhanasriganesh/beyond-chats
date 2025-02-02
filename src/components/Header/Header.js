import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
     return (

            <div className="flex justify-between items-center px-4 py-1 md:px-6 md:py-2"> {/* Reduced padding for height */}
                <Link to="/">
                   BeyondChats
                </Link>
            </div>
 );
}

export default Header;
