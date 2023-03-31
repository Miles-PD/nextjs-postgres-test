'use client'

import Link from 'next/link'
import AddPost from './components/AddPost'
import { useQuery } from '@tanstack/react-query'
import Post from './components/Post'
import { PostsType } from './types/Posts'
import axios from 'axios'

const allPosts = async() => {
  const response = await axios.get('/api/posts/getPosts')
  return response.data
}


export default function Home() {

  const { data, error, isLoading } = useQuery<PostsType[]>({
    queryFn: allPosts,
    queryKey: ['posts'],
  })
  if (error) return error
  if (isLoading) return 'Loading...'
  console.log(data)
  return (
    <main className=''>
      <AddPost />
      {data?.map((post) => (
        <Post 
          key={post.id} 
          comments={post.comments}
          name={post.user.name} 
          avatar={post.user.image} 
          postTitle={post.title} 
          id={post.id} />
      ))}
    </main>
  )
}
