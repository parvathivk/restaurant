import React from 'react'

function Review({data}) {
  return (
    <div>
       {data.map((item)=>(
        <div>
            <h5>{item.name}</h5>
            <div>
                <p>{item.date}</p>
                <p>{item.comments}</p>
            </div>
        </div>
       ))}
    </div>
  )
}

export default Review