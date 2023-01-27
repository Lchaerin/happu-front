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
import * as React from "react";
import SimpleDialog from '../components/recomendation'
import TuneIcon from '@mui/icons-material/Tune';

export default function Home() {
    const [cookie, setCookie] = useCookies(['id']);
    const [open, setOpen] = React.useState(false);
    
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = (value) => {
      setOpen(false);
    };

  return (
    <div>
      <div style = {{height:"48px",display: "flex",flexWrap: "wrap", alignItems:"center"}}><a className = "categoryName"> Home </a>
      <div style={{position:"absolute", top:"12px", right:"20px"}} onClick={handleClickOpen}><TuneIcon/></div></div>

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
          }} onClick={() => Router.push("/okinawa")} >
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
<<<<<<< HEAD
      <SimpleDialog
          open={open}
          onClose={handleClose}
        />
        <FixedBottomNavigation/>
        
=======
        <FixedBottomNavigation v="home"/>
>>>>>>> 65c816f83cdf2191e1d8a872b839dfb8bf1dba2f
      </div>
    </div>
  )
}
