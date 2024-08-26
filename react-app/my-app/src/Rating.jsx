import { useState } from 'react';
import './Rating.css';
import star from './icons8-star-50.png';

export const Rating = () => {
    const ratingArray = [
        {value: 1},
        {value: 2},
        {value: 3},
        {value: 4},
        {value: 5}
    ]

    const [activeRating, setActiveRating]=useState(0);


    return (
        <div>
            <div>Give your Rating!</div>
            <div className='d-flex'>
            {ratingArray.map(item => 
                <div key={item.value}>
                    <div>
                        <img src={star} alt='star' className={`box ${activeRating>=item.value ? `fill${activeRating}` : ''}`} 
                    onClick={() => setActiveRating(item.value)}/>
                    </div>
                </div>
            )}
            </div>
        </div>
    )
}