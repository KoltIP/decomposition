import React from 'react';
import Finder from './Finder/Finder';
import Header from './Header/Header';
import classes from '../styles/Image.css';
import Footer from '../components/Footer/Footer';


/**
 * 
 * The component collects all other components
 * 
**/


const Page = (props) => {
    
    /** Description of prop "topic". */
    const topics = props.topics;

    /** Description of prop "news". */
    const news = props.news;

    /** Description of prop "exchanges". */
    const exchanges = props.exchanges;

    /** Description of prop "themes". */
    const themes = props.themes;

    /** Description of prop "exampleFind". */
    const exampleFind = props.exampleFind;

    /** Description of prop "options". */
    const options = props.options;

    
    return(  
        <div>
            <Header topics = {topics} news = {news} exchanges={exchanges}/>
            <Finder themes = {themes} exampleFind = {exampleFind}/>
            <img className='img' src='./img/decomposition.png'></img>
            <Footer options = {options} />
        </div>
    )    
}
export default Page;