import React from 'react';
import classes from '../../styles/Footer.css';
import Option from '../Footer/Option';

/**
 * 
 * The component encapsulates bottom element of site
 * 
**/

const Footer = (props) => {

    /** Description of prop "options". */
    const options = props.options;
    
    return(  
        <div className='footer'>
            {
            options.map
                (
                    (option,index) =>
                        <Option key = {index} name = {option.name}>
                            {option.content}
                        </Option>
                )
            }
        </div>

    )    
}
export default Footer;