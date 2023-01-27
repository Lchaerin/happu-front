import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import * as React from "react";
import { CookiesProvider,useCookies } from 'react-cookie';

export default function Home() {
  const [cookies, setCookies] = useCookies(['id']);

  React.useEffect(function () {
    console.log(cookies.id)
    console.log(cookies.pw)
    fetch("http://localhost:8080/login/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: cookies.id,
        pw: cookies.pw,
      }),
    })
      .then(async (res) => {
        if(res!=undefined){
        const data = await res.json();
        location.href = "./home";
      }
      })
      .catch((err) => {
        console.log(err.message);
        alert("로그인이 필요합니다");
        location.href = "./signin";
      });
  }, []);



  return (
    <div className={styles.container}>
      hello
    </div>
  )
}
