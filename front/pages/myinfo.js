import Head from 'next/head'
import Image from 'next/image'
import { CookiesProvider,useCookies } from 'react-cookie'
import FixedBottomNavigation from './bottomNavFixed'
import myP from '../image/myPhoto.png'
import ic from '../image/myIc.png'
import arw from '../image/myinfoArrow.png'

export default function Home() {
    const [cookie, setCookie] = useCookies(['id']);
    return (
        <div>
            <div style = {{paddingTop: "9px", paddingBottom: "9px"}}><a className = "categoryName"> 내 정보 </a></div>
            
            <div style = {{borderStyle: "solid", color: "#CFCFCF", borderWidth: "1px"}}></div>

            <div style = {{
                marginLeft: "30px",
                marginTop: "30px",
                display: "flex",
                alignItems: "center"
                }}>

                <Image
                    src = {myP}
                    width = "25px"
                    height = "25px" />

                    <a className = "myInfoFSize"> &nbsp;&nbsp;
                        <span style = {{
                            fontFamily: 'Pretendard',
                            fontWeight: "800"
                        }}> {cookie.user}</span>
                        <span style = {{ fontFamily: 'Pretendard', fontWeight: "thin"}}>님 </span>
                    </a>
            </div>

            <div className = "myInfoBtn">
                <button style = {{
                    width: "170px",
                    height: "80px",
                    padding: "7px",
                    marginBottom: "10px",
                    backgroundColor: "rgba(245, 245, 245, 1)",
                    border: "none",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    aligntContent: "center",
                    fontFamily: "Pretendard",
                    fontSize: "15px",
                    fontWeight: "600",
                    borderRadius: "0.5rem"
                }}>
                    <Image
                        src = {ic}
                        width = "120"
                        height = "35"
                        marginBottom = "5px"/> &nbsp;&nbsp;&nbsp;&nbsp;찜&nbsp;&nbsp;&nbsp;&nbsp;
                </button>

                <button style = {{
                    width: "170px",
                    height: "80px",
                    padding: "7px",
                    marginBottom: "10px",
                    backgroundColor: "rgba(245, 245, 245, 1)",
                    border: "none",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    aligntContent: "center",
                    fontFamily: "Pretendard",
                    fontSize: "15px",
                    fontWeight: "600",
                    borderRadius: "0.5rem"
                }}>
                    <Image
                        src = {ic}
                        width = "120"
                        height = "35"
                        marginBottom = "5px"/> 결제내역
                </button>

                <button style = {{
                    width: "170px",
                    height: "80px",
                    padding: "7px",
                    marginBottom: "10px",
                    backgroundColor: "rgba(245, 245, 245, 1)",
                    border: "none",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    aligntContent: "center",
                    fontFamily: "Pretendard",
                    fontSize: "15px",
                    fontWeight: "600",
                    borderRadius: "0.5rem"
                }}>
                    <Image
                        src = {ic}
                        width = "120"
                        height = "35"
                        marginBottom = "5px"/> 쿠폰함
                </button>

                <button style = {{
                    width: "170px",
                    height: "80px",
                    padding: "7px",
                    marginBottom: "10px",
                    backgroundColor: "rgba(245, 245, 245, 1)",
                    border: "none",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    aligntContent: "center",
                    fontFamily: "Pretendard",
                    fontSize: "15px",
                    fontWeight: "600",
                    borderRadius: "0.5rem"
                }}>
                    <Image
                        src = {ic}
                        width = "120"
                        height = "35"
                        marginBottom = "5px"/> 내가 쓴 리뷰
                </button>        
            </div>

            <div style = {{borderStyle: "solid", color: "#EBEBEB", borderWidth: "7px", marginTop: "20px"}}></div>

            <div className = "myAlign">
                <a className = "myInfoMenu" href = './demoEnd'>공지사항 <Image src = {arw} /> </a>
                <div style = {{borderStyle: "solid", color: "#CFCFCF", borderWidth: "1px"}}></div>

                <a className = "myInfoMenu" href = './demoEnd'>이벤트 <Image src = {arw} /> </a>
                <div style = {{borderStyle: "solid", color: "#CFCFCF", borderWidth: "1px"}}></div>

                <a className = "myInfoMenu" href = './demoEnd'>고객센터 <Image src = {arw} /> </a>
                <div style = {{borderStyle: "solid", color: "#CFCFCF", borderWidth: "1px"}}></div>

                <a className = "myInfoMenu" href = './demoEnd'>설정 <Image src = {arw} /> </a>
                <div style = {{borderStyle: "solid", color: "#CFCFCF", borderWidth: "1px"}}></div>

                <a className = "myInfoMenu" href = './demoEnd'>약관 및 정책 <Image src = {arw} /> </a>
                <div style = {{borderStyle: "solid", color: "#CFCFCF", borderWidth: "1px"}}></div>
            </div>

            <div>
                <FixedBottomNavigation/>
            </div>
        </div>
    )
}


