import React from 'react';
import './popup.css';

const Popup = ({open, children}) => {
    if(!open) return null
  return (
    <>
    <div className='overlay'/>
    
    <div className='modal'>
        {children}
    </div>
    </>
  )
}

export default Popup