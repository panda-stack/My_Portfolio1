import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({
  title,
  icon,
  type = 'mybtn1',
  href = '#home',
}) {
  return (
    <Link to={href} className={'btn ' + type}>
      <span className={icon ? 'mr-2' : ''}>{title}</span>
      {icon && <i className={icon}></i>}
    </Link>
  )
}
