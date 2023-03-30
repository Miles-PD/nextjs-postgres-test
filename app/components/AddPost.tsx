'use client'

import React, { useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from 'axios'


export default function AddPost() {

    const [title, setTitle] = useState('')
    const [isDisabled, setIsDisabled] = useState(false)

    const { mutate } = useMutation(
        async (title: string) => await axios.post('/api/posts/addPost', { title })
    )

    const submitPost = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsDisabled(true)
        mutate(title)
    }

  return (
    <form onSubmit={submitPost} className="bg-white my-8 p-8 rounded-md">
        <div className="flex flex-col my-4">
            <textarea
                className="p-2 text-lg rounded-md my-2 bg-gray-300 text-black"
                onChange={(e) => setTitle(e.target.value)} 
                name="title" 
                value={title}
                placeholder="Type stuff here"
            >
            </textarea>
        </div>
        <div className=" flex items-center justify-between gap-2">

            <p
            className={`font-bold text-sm ${
                title.length > 300 ? "text-red-700" : "text-gray-700"
            } `}
            >{`${title.length}/300`}
            </p>

            <button
                disabled={isDisabled}
                className="text-sm bg-teal-600 text-white py-2 px-6 rounded-xl disabled:opacity-25"
                type="submit"
            >Create post
            </button>

        </div>
    </form>
  )
}
