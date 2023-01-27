import styles from '../styles/Home.module.css'
import Drawer from '../components/drawer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Drawer/>
    </div>
  )
}
