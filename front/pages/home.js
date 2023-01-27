import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { CookiesProvider,useCookies } from 'react-cookie';

export default function Home() {
    const [cookie, setCookie] = useCookies(['id']);
  return (
    <div className={styles.container}>
      {cookie.name}
    </div>
  )
}
