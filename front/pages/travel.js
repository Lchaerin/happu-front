import Head from 'next/head'
import FixedBottomNavigation from './bottomNavFixed'
import Image from 'next/image'
import Router, { useRouter } from "next/router";
import arw from '../image/prevArw.png'
import tri from '../image/traIcon.png'
import t0 from '../image/travel0.png'
import t1 from '../image/travel1.png'
import t2 from '../image/travel2.png'

export default function Home() {
    return (
        <div>
            <button style = {{
                border: "none",
                backgroundColor: "rgba(255, 255, 255, 1)",
                padding: "20px"
                }} onClick={() => Router.push("/category")}> <Image src = {arw} width = "110vw" height = "110vh" />
            </button>
      
            <div style = {{borderStyle: "solid", color: "#CFCFCF", borderWidth: "1px"}}></div>

            <div style = {{
                marginLeft: "30px",
                marginTop: "40px",
                display: "flex",
                verticalAlign: "middle"}}>
                    <Image src = {tri}/> &nbsp;&nbsp;&nbsp;&nbsp;
                    <span style = {{
                        fontFamily: "Pretendard",
                        fontSize: "35px",
                        fontWeight: "750"}}>여행</span>
            </div>

            <div style ={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
                marginLeft: "24px",
                marginRight: "24px"
            }}>                
                <div style = {{
                    marginTop: "15px",
                    borderRadius: "1.5rem",
                    overflow: "hidden"}}>
                        <Image width = "100vw" height = "40vh" src = {t0} />
                </div>

                <div style = {{
                    marginTop: "15px",
                    borderRadius: "1.5rem",
                    overflow: "hidden"}}>
                        <Image width = "100vw" height = "40vh" src = {t1} />
                </div>

                <div style = {{
                    marginTop: "15px",
                    borderRadius: "1.5rem",
                    overflow: "hidden"}}>
                        <Image width = "100vw" height = "40vh" src = {t2} />
                </div>
            </div>

            <div>
                <FixedBottomNavigation/>
            </div>
        </div>
    )
}