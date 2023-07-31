"use client"

import {sessionProvider} from 'next-auth/react';

const Provider = ({session, children}) => {
  return (
    <sessionProvider session={session}>
      {children}
    </sessionProvider>
  ) 
}

export default Provider;