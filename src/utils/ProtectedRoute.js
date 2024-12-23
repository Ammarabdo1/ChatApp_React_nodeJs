import { useStore } from 'libs';
import React from 'react'
import { Navigate } from 'react-router-dom'

const HomeSever = ({children}) => {
  const {token} = useStore();

  if(token) {
    return children
  }

  return <Navigate to='/login'/>
}

export default HomeSever