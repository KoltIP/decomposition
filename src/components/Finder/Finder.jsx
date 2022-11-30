import React from 'react';
import classes from '../../styles/Finder.css';
import Themes from './Themes';
import Find from './Find';


/**
 * 
 * The component encapsulates the search input and other element
 * 
**/

const Finder = (props) => {

    /** Description of prop "themes". */
    const themes = props.themes;

    /** Description of prop "exampleFind". */
    const exampleFind = props.exampleFind;

    return(  
      <div className='finder'>
        <Themes>
          {themes.map((them,index) => <span key = {index} className='theme'>{them}</span>)}
        </Themes>
        <Find />
        <label className='littleStyle'>Найдётся всё. Например, <span className='greyStyle'>{exampleFind}</span></label>
      </div>
    )    
}
export default Finder;