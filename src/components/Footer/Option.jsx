import React from 'react';
import classes from '../../styles/Footer.css';


/**
 * 
 * The component encapsulates option and references
 * 
**/

const Option = (props) => {
    
    /** Description of prop "name". */
    const name = props.name;

    /** Description of prop "children".
     * name = name of option 
     * children = content of option (html)  
    */
    const children = props.children;

    return(  
        <div className='item'>
            <label className='name'>{name}</label>
            {children} 
        </div>

    )    
}
export default Option;