import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { CookiesProvider,useCookies } from 'react-cookie'
import Link from 'next/link'
import FixedBottomNavigation from './bottomNavFixed'
import EmblaCarousel from '../components/carousel'

const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Home() {
    const [cookie, setCookie] = useCookies(['id']);
  return (
    <div>
      <div className = "sandbox">
        <section className = "sandbox__carousel">
        <EmblaCarousel slides = {SLIDES} options = {OPTIONS} />
        </section>
      </div>
    
      <div>
        <FixedBottomNavigation/>
      </div>

    </div>
  )
}
