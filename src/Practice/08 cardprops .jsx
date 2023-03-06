import React from 'react';
import Images from './10 propscard ';

const Card = (props) => {
    // console.log(props)
    return (
        <>
      
            <div className='cards'>
                <div className='card'>
                    <Images image01 = {props.image01} />
                    <div className='card_info'>
                        <span className='card_categary'>{props.name} </span>
                        <h3 className='card_title'>  {props.cardtitle} </h3>
                        <a href={props.slink} target= "_parag">
                            <button>Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
           
        </>
    );
};

export default Card;