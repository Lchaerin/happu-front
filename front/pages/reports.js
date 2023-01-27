import Head from 'next/head'
import FixedBottomNavigation from './bottomNavFixed'
import Image from 'next/image'
import Router, { useRouter } from "next/router";
import arw from '../image/prevArw.png'
import rei from '../image/repIcon.png'
import r0 from '../image/reports0.png'
import r1 from '../image/reports1.png'
import r2 from '../image/reports2.png'

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
                verticalAlign: "middle"
            }}>
                    <Image src = {rei}/> &nbsp;&nbsp;&nbsp;&nbsp;
                    <span style = {{
                        fontFamily: "Pretendard",
                        fontSize: "35px",
                        fontWeight: "750"}}>레포츠</span>
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
                    overflow: "hidden"
                }} onClick={() => Router.push("/demoEnd")} >
                        <Image width = "100vw" height = "40vh" src = {r0} />
                </div>

                <div style = {{
                    marginTop: "15px",
                    borderRadius: "1.5rem",
                    overflow: "hidden"
                }} onClick={() => Router.push("/demoEnd")} >
                        <Image width = "100vw" height = "40vh" src = {r1} />
                </div>

                <div style = {{
                    marginTop: "15px",
                    borderRadius: "1.5rem",
                    overflow: "hidden"
                }} onClick={() => Router.push("/demoEnd")} >
                        <Image width = "100vw" height = "40vh" src = {r2} />
                </div>
            </div>

            <div>
                <FixedBottomNavigation/>
            </div>
        </div>
    )
}