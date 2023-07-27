import React, { useState } from 'react'


const SingleTour = ({id,image,info,name,price,removeTour}) => {
    const [readMore, setReadeMore] = useState(false)
  return (
    
    <article className='single-tour'>  
        <img src={image} alt={name} className='img'/>
        <span className="tour-price">${price}</span>
        <div className="tour-info">
            <h6 style={{fontSize:'15px',marginBottom:"4px"}}>{name}</h6>
            <p>{readMore? info: `${info.substring(0,100)}...`}
            <button type='button' className='info-btn' onClick={()=>setReadeMore(!readMore)}>
                {readMore ? "show less": "read more"}
            </button>
            </p>
            <button type='button' className='btn btn-block delete-btn' onClick={()=>removeTour(id)}>
                not interested
            </button>
        </div>
    </article>
  )
}

export default SingleTour
