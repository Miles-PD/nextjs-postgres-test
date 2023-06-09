'use client'

import { signIn } from 'next-auth/react'

import React from 'react'

function Login() {
  return (
    <li className='list-none'>
        <button onClick={() => signIn()} className='text-sm bg-gray-500 text-white py-2 px-6 rounded-xl disabled:opacity-25'>Sign In</button>
    </li>
  )
}

export default Login