'use client'

import Image from "next/image"
import Link from "next/link"


function Post({ avatar, name, postTitle, id, comments }) {
  return (
    <div className="bg-white my-8 p-8 rounded-lg">
        <div className="flex items-center gap-2">
            <Image className="w-14 rounded-full" width={64} height={64} src={avatar} alt='avatar' />
            <h3 className="font-bold text-gray-700">{name}</h3>
        </div>
        <div className="my-8 ">
          <p className="break-all text-gray-700">{postTitle}</p>
        </div>
        <div className="flex gap-4 cursor-pointer items-center">
        <Link
          href={{
            pathname: `/post/${id}`,
          }}
        >
          <p className=" text-sm font-bold text-gray-700">
            {comments?.length} Comments
          </p>
        </Link>
        </div>
    </div>
  )
}

export default Post