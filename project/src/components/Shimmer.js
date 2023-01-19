import React from 'react'

function Shimmer() {
  return (
    <div className='food-card-list'>
    {Array(15).fill("").map((cur,idx) => {

            return <div className='shimmer' key={idx}></div>

    })}
    </div>
  )
}

export default Shimmer