import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { CookiesProvider,useCookies } from 'react-cookie'
import Link from 'next/link'
import FixedBottomNavigation from './bottomNavFixed'

export default function Home() {
    const [cookie, setCookie] = useCookies(['id']);
  return (
    <div>
      <head>
        <title> ???서비스이름??? </title>
      </head>

      
  </div>
  )
}
