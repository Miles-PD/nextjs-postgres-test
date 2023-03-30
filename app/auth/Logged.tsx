'use client'

import { signOut } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"

type User = {
    image: string
}


function Logged({ image }: User) {
  return (
    <li className="flex gap-8 items-center">
        <button 
            onClick={() => signOut()} 
            className="bg-gray-600 text-white text-sm px-4 py-3 rounded-lg"
            >
                Sign Out
            </button>
            <Link href={'/dashboard'}>
                <Image className="w-14 rounded-full" width={64} height={64} src={image} alt='image' />
            </Link>
    </li>
  )
}

export default Logged
