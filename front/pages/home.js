import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { CookiesProvider,useCookies } from 'react-cookie'
import Link from 'next/link'
import FixedBottomNavigation from './bottomNavFixed'
import Router, { useRouter } from "next/router";
import h0 from '../image/home0.png'
import h1 from '../image/home1.png'
import h2 from '../image/home2.png'


export default function Home() {
    const [cookie, setCookie] = useCookies(['id']);
  return (
    <div>
      <div style = {{paddingTop: "9px", paddingBottom: "9px"}}><a className = "categoryName"> ??서비스 로고?? </a></div>

      <div style = {{borderStyle: "solid", color: "#CFCFCF", borderWidth: "1px"}}></div>

      <div style ={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}>
        <div style = {{
          marginTop: "15px",
          borderRadius: "1.5rem",
          overflow: "hidden"
          }} onClick={() => Router.push("/demoEnd")} >
            <Image width = "50vw" height = "50vh" src = {h0} />
        </div>

        <div style = {{
          marginTop: "15px",
          borderRadius: "1.5rem",
          overflow: "hidden"
          }} onClick={() => Router.push("/demoEnd")} >
            <Image width = "50vw" height = "50vh" src = {h1} />
        </div>

        <div style = {{
          marginTop: "15px",
          borderRadius: "1.5rem",
          overflow: "hidden"
          }} onClick={() => Router.push("/demoEnd")} >
            <Image width = "50vw" height = "50vh" src = {h2} />
        </div>
      </div>

      <div>
        <FixedBottomNavigation v="home"/>
      </div>
    </div>
  )
}
