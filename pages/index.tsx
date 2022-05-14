import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.main}>
      <Link href={'onboarding'}> Go to onboarding page</Link>
    </div>
  )
}

export default Home
