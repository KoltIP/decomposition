import React from 'react';
import classes from '../../styles/Finder.css';


/**
 * 
 * The component encapsulates the search input
 * 
**/

const Find = () => {

    return(        
        <div>  
          <label className='item'>Яндекс</label>        
          <input type='search' className='item'/>
        </div>        
    )    
}
export default Find;