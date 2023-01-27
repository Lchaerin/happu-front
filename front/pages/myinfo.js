import Head from 'next/head'
import Image from 'next/image'
import { CookiesProvider,useCookies } from 'react-cookie'
import FixedBottomNavigation from './bottomNavFixed'
import Router, { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import myP from '../image/myPhoto.png'
import he from '../image/heart.png'
import co from '../image/coupon.png'
import bu from '../image/buy.png'
import re from '../image/review.png'
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
                        }}> {cookie.name}</span>
                        <span style = {{ fontFamily: 'Pretendard', fontWeight: "thin"}}>님 </span>
                    </a>
            </div>

            <div className = "myInfoBtn">
                <button style = {{
                    width: "170px",
                    height: "80px",
                    padding: "7px",
                    marginBottom: "10px",
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    border: "none",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    aligntContent: "center",
                    fontFamily: "Pretendard",
                    fontSize: "16px",
                    fontWeight: "600",
                    borderRadius: "0.5rem"
                }} onClick={() => Router.push("/demoEnd")} >
                    <Image
                        src = {he}
                        width = "120"
                        height = "35"
                        marginBottom = "5px"/> &nbsp;&nbsp;&nbsp;&nbsp;찜&nbsp;&nbsp;&nbsp;&nbsp;
                </button>

                <button style = {{
                    width: "170px",
                    height: "80px",
                    padding: "7px",
                    marginBottom: "10px",
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    border: "none",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    aligntContent: "center",
                    fontFamily: "Pretendard",
                    fontSize: "16px",
                    fontWeight: "600",
                    borderRadius: "0.5rem"
                }} onClick={() => Router.push("/demoEnd")} >
                    <Image
                        src = {bu}
                        width = "120"
                        height = "35"
                        marginBottom = "5px"/> 결제내역
                </button>

                <button style = {{
                    width: "170px",
                    height: "80px",
                    padding: "7px",
                    marginBottom: "10px",
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    border: "none",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    aligntContent: "center",
                    fontFamily: "Pretendard",
                    fontSize: "16px",
                    fontWeight: "600",
                    borderRadius: "0.5rem"
                }} onClick={() => Router.push("/demoEnd")} >
                    <Image
                        src = {co}
                        width = "120"
                        height = "35"
                        marginBottom = "5px"/> 쿠폰함
                </button>

                <button style = {{
                    width: "170px",
                    height: "80px",
                    padding: "7px",
                    marginBottom: "10px",
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    border: "none",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    aligntContent: "center",
                    fontFamily: "Pretendard",
                    fontSize: "16px",
                    fontWeight: "600",
                    borderRadius: "0.5rem"
                }} onClick={() => Router.push("/demoEnd")} >
                    <Image
                        src = {re}
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
                <FixedBottomNavigation v="myInfo"/>
            </div>
        </div>
    )
}


