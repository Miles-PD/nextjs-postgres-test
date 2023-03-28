import Link from 'next/link'
import styles from './page.module.css'


export default function Home() {
  return (
    <main className='py-4 px-48'>
      <div className='bg-rose-400 inline-block rounded-md px-2 py-1 border-solid border-blue-500'>
        <Link href={'/dashboard'}>Dashboard</Link>
      </div>
    </main>
  )
}
