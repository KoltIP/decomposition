import React from 'react';
import classes from '../../styles/Header.css';

/**
 * 
 * The component encapsulates currency
 * 
**/


const ExchangeItem = (props) => {
    
    /** Description of prop "name". 
     * the name of currency
    */
    const name = props.name;

    /** Description of prop "value". 
     * currency value today
    */
    const value = props.value;
    
    /** Description of prop "change".
     * change per day( value = today - yesterday)
     */
    const change = props.change;

    return(  
        <label className='exchange'>{name} : {value} <span className='greyStyle'>{change}</span></label>
    )    
}
export default ExchangeItem;