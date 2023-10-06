import React from 'react'
import './Film.css'
import img from '../assets/fenix.jpg'

const Film = ({
    filmName,
    rating,
    description
}) => {
    return (
        <div className='film'>
            <img className='film_cover' src={img} alt="" />
            <div className='film_info'>
                <h2 className='film_name'>{filmName}</h2>
                <div className='rating'>
                    <p className='rating_title'>Оценка</p>
                    <p className='rating_count'>{rating}</p>
                </div>
                <p className='description'>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Film
