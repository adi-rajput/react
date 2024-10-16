import React from 'react'
import { useRouteError } from 'react-router-dom'
const Error = () => {
  const error = useRouteError();
  console.log(error)
  return (
    <div>
        <h3>
            Error: Page not found
        </h3>
        <h3>
            Something Went Wrong
        </h3>
        <h3>
            {error.error.message}
        </h3>
        <h3>
            {error.status}
        </h3>
    </div>
  )
}

export default Error