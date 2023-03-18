import React from 'react';
import './menu-element.css';

const MenuElement = ({name,icon}) => {
  return (
    <div className='menu-element'>
     <span><img src={icon}></img></span><p><a href='#'>{name}</a></p>
    </div>
  )
}

export default MenuElement
