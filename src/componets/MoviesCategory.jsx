import React from 'react'
import './MoviesCategory.css'

const MoviesCategory = ({
    title
}) => {
  return (
    <div className='movie_category'>
      <h2 className='category_name'>{title}</h2>
      <div className='category_divider' />
    </div>
  )
}

export default MoviesCategory
