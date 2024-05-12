import React from 'react';
import './Button.css'

const Button = ({children,withBgColor}) => {
  return (
    <>
        <button className={withBgColor ? 'with-bg-color' : 'without-bg-color'}>{children}</button>
    </>
  )
}

export default Button