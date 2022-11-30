import React from 'react';
import { useState } from 'react';
import Topic from './Topic';
import News from './News';
import ExchangeItem from './ExchangeItem';
import classes from '../../styles/Header.css';


/**
 * 
 * The component encapsulates top element of site
 * 
**/


const Header = (props) => {
    
    /** Description of prop "topics". **/
    const topics = props.topics;

    /** Description of prop "currentDate". current today date **/
    const currentDate = new Date;

    /** Description of prop "news". list of news **/
    const news = props.news;

    /** Description of prop "exchanges".**/
    const exchanges = props.exchanges;
    
    return(  
        <div className='header'>
            <div className='topics'>
                {topics.map( (topic, index) => <Topic key={index} name = {topic}/>)}
                <label className='greyStyle'>{currentDate.getDate()}.{currentDate.getMonth()}.{currentDate.getFullYear()}</label>
            </div>
            <ul className='list'>  
                {news.map( (content, index) => <News key={index} content = {content}/>)}
            </ul>
            <div className='exchange'>
                {exchanges.map((exchange,index)=><ExchangeItem key ={index} name = {exchange.exchangesName} value = {exchange.exchangesValue} change ={exchange.change}/>)}
            </div>
        </div>

    )    
}
export default Header;