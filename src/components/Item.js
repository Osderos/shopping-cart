import React from 'react'
import '../styles/item.css'


function Item(props) {
  return (
    <div className='item-container'>
        <div className='topImage'>
            <img className='displayedImg' src={props.imgLink} alt={props.title}/>
        </div>
        <div className='bottomDetails'>
            <h2 className='itemTitle'>{props.title}</h2>
            <div className='itemPrice'>Price</div>
            <div className='itemInspect'>Inspect</div>
        </div>
    </div>
  )
}

export default Item