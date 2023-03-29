import Link from 'next/link'
import styles from './page.module.css'

async function getPosts() {
  const res = await fetch('/api/getPosts')
}

export default function Home() {
  return (
    <main className='py-4 px-48'>
      
    </main>
  )
}
