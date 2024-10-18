import React from 'react'
import CompoA from './CompoA'
const Women = () => {
  user = {
    name: "John",
    age: 30,
    email: "john.don"
    }
  return (
    <div>
      <CompoA user={user}/>
    </div>
  )
}

export default Women