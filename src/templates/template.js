import React from 'react'

export default function template(props) {
    const {pageContext} = props
    const {title} = pageContext
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}
