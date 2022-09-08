import React from 'react'

const ResumeItem = ({title, Icon, value}) => {
  return (
    <div className='style-item'>
    <h3>{title}</h3>
    <Icon className="icon"/>
    <span>{value}</span>
    </div>

  )
}

export default ResumeItem