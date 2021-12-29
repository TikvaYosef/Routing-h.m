import React from 'react';
import { Link } from "react-router-dom";




const NavBar =()=>{
    
    return(
        <>
        <Link to="/"> home page</Link>
        <Link to="/student"> student page</Link>
        <Link to="/teacher"> teacher page</Link>
        <Link to="/parent"> parent page</Link>
        
        </>
    )

}
export default NavBar;