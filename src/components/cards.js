/** 
* @author: Alexander Chi
* @description:
* @date: 02/Septiembre/2021
**/  
import React, { useState } from 'react';  
import illustration from '../assets/svgs/illustration-woman-online-desktop.svg';

export function CardFAQ(props) {   
    const [ context, setContext ] = useState(props.items);  
    const handleClick = (key) => {  
        let items = context.map((item, index) => {
            item.active = item.key === key 
            ? ( item.active === 'active' ? '' : 'active' )
            : '';
            return item;
        }) 
        setContext(items);
    }
    return (    
        <div className="card__faq">
            <div className="card__img">
                <img alt="FAQ" className="img" src={illustration} />
            </div> 
            <div className="card__content">
                <h3 className="card__title">FAQ</h3>
                <ul>
                    {context.map((item, index) => {
                        return (
                            <ItemFAQ 
                                id={item.key}
                                active={item.active}
                                key={item.key}
                                question={item.question}
                                response={item.response}
                                handleClick={handleClick}/>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}

export function ItemFAQ(props) {
    const { question, response, handleClick, active, id } = props;   
    return (
        <li className="item__collaps">
            <div id={id} className={`question ${active}`} onClick={()=> {handleClick(id)}}>
                <span className={`question__text`}>
                    {question}
                </span> 
                <div className="item__arrow">
                    <span className={`arrow ${active}`}></span>
                </div>
            </div> 
            <div className={`response ${active}`}>
                {response}
            </div>
        </li>
    );
}

export default CardFAQ;