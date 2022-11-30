import React from 'react';
import classes from '../../styles/Finder.css';


/**
 * 
 * The component encapsulates the theme of searching
 * children == name of searching theme 
 * 
**/

const Themes = ({children}) => {
    return(  
        <div className='themes'>
            {children}          
        </div>
    )    
}
export default Themes;