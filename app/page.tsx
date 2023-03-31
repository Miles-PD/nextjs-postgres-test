'use client'

import Link from 'next/link'
import AddPost from './components/AddPost'
import { useQuery } from '@tanstack/react-query'
import Post from './components/Post'
import axios from 'axios'

const allPosts = async() => {
  const response = await axios.get('/api/posts/getPosts')
  return response.data
}


export default function Home() {

  const { data, error, isLoading } = useQuery({
    queryFn: allPosts,
    queryKey: ['posts'],
  })

  return (
    <main className=''>
      <AddPost />
      {data?.map((post) => (
        <Post 
          key={post.id} 
          name={post.user.name} 
          avatar={post.user.image} 
          postTitle={post.title} 
          id={post.id} />
      ))}
    </main>
  )
}
