import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import * as React from "react";
import { CookiesProvider,useCookies } from 'react-cookie';

export default function Home() {
  const [c_loginID, setC_loginID] = useCookies(['id']);

  React.useEffect(function () {
    console.log(c_loginID.id)
    console.log(c_loginID.pw)
    fetch("http://localhost:8080/login/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        studentId: c_loginID.id,
        password: c_loginID.pw,
      }),
    })
      .then(async (res) => {
        
        const data = await res.json();
        console.log(data.name)
        location.href = "./home";
      })
      .catch((err) => {
        console.log(err.message);
        alert("로그인 정보가 일치하지 않습니다!");
      });
  }, []);



  return (
    <div className={styles.container}>
      hello
    </div>
  )
}
