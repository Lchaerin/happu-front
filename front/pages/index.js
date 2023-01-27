import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { CookiesProvider } from 'react-cookie';

export default function Home() {
  const [c_loginID, setC_loginID] = useCookies(['login_id']);
  const [c_loginPW, setC_loginPW] = useCookies(['login_pw']);

  React.useEffect(function () {
    fetch("백엔드서버/checkuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        studentId: c_loginID,
        password: c_loginPW,
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


React.useEffect(function () {
    console.log({
      id: c_loginID,
      password: c_loginPW,
    });
  }, []);

  return (
    <div className={styles.container}>
      hello
    </div>
  )
}
