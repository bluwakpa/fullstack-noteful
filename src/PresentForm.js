import React from 'react'
import './index.css'

export default function PresentForm(props) {
  const { className, ...otherProps } = props
  return (
    <form
      className={['Present-form', className].join(' ')}
      action='#'
      {...otherProps}
    />
  )
}