import React from 'react'
import styled from 'styled-components'

export default function Member(props) {
  const { info } = props

  if (!info) {
    return <h3>Working fetching your friend&apos;s details...</h3>
  }

  return (
    <div className='friend container'>
      <p>name: {info.name}</p>
      <p>email: {info.email}</p>
      <p>role: {info.role}</p>
    </div>
  )
}
