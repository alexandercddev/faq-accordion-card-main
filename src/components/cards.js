/** 
* @author: Alexander Chi
* @description:
* @date: 02/Septiembre/2021
**/  
import React, { useState } from 'react';  
import illustration from '../assets/svgs/illustration-woman-online-desktop.svg';

export function CardFAQ(props) { 
    const { items } = props;
    return (    
        <div className="card__faq">
            <div className="card__img">
                <img alt="FAQ" className="img" src={illustration} />
            </div> 
            <div className="card__content">
                <h3 className="card__title">FAQ</h3>
                <ul>
                    {items.map((item, index) => {
                        return (
                            <ItemFAQ 
                                key={`item-faq-${index}`}
                                question={item.question}
                                response={item.response}/>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}

export function ItemFAQ(props) {
    const { question, response } = props;
    const [ arrow, setArrow ] = useState('arrow__up');
    const handleClick = (event) => {
        setArrow( arrow === 'arrow__down' 
            ? 'arrow__up' 
            : 'arrow__down'
        );
    }
    return (
        <li className="item__collaps">
            <div className="question" onClick={handleClick}>
                <span className="question__text">
                    {question}
                </span> 
                <span className={`${arrow}`}></span>
            </div> 
            <div className="response">
                {response}
            </div>
        </li>
    );
}

export default CardFAQ;