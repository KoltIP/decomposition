import React from 'react';
import { useState } from 'react';
import classes from '../../styles/Header.css';

/**
 * 
 * The component encapsulates topic
 * 
**/

const Topic = ({name}) => {


    return(  
        <label><a className='topic' href='#'>{name}</a></label>
    )    
}
export default Topic;