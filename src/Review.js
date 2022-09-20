import React from 'react'

function Review({data}) {
  return (
    <div>
         <h3>Reviews</h3>
       {data.map((item)=>(
        <div>
            <h5>{item.name}</h5>
            <div>
                <p>{item.date}</p>
                <p>{item.comments}</p><hr/>
            </div>
        </div>
       ))}
    </div>
  )
}

export default Review