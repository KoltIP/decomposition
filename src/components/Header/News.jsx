import React from 'react';
import { useState } from 'react';
import classes from '../../styles/Header.css';

/**
 * 
 * The component encapsulates news
 * 
**/


const News = ({content}) => {

    return(  
        <li>
            <a href='#'>
                {content}
            </a>
        </li>
    )    
}
export default News;