import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

function Rate() {

    const [rating, setRating] = useState(0) // initial rating value

    // Catch Rating value
    const handleRating = (rate) => {
      setRating(rate)
    }

  return (
    <div className='App'>
      <Rating onClick={handleRating} ratingValue={rating}/>
    </div>
  )
}

export default Rate