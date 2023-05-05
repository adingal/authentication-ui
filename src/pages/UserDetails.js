import React from 'react'
import { useParams } from 'react-router-dom'

function UserDetails() {
  const params = useParams()
  console.log(params.id)
  return <div>UserDetails</div>
}

export default UserDetails
