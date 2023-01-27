import styles from '../styles/Home.module.css'
import Drawer from './drawer';
import FixedBottomNavigation from './bottomNavFixed';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <head>
        <title> ???서비스이름??? </title>
      </head>

      <body>
        <p> 만나서 반가워요. </p>
        <p> 김수연 님에 대해 알고 싶어요. </p>
        <p> 나는 최대 </p> <p> 시간 걸을 수 있어요. </p>
        <p> 나는 </p> <p> 이 있어요. </p>
        <p> 나의 음식 성향은 </p> <p> 이에요. </p>
        <p> 나는 </p>
        <button> 확인 </button>
      </body>

      <div>
        <FixedBottomNavigation/>
      </div>
    </>
  )
}
