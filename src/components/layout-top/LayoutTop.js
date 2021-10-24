import { Header, Sidebar, Content } from "../../components"
import styles from "./layoutTop.modules.scss"

export const LayoutTop = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainContainer}>
        <Header />
        <Content />
      </div>
    </div>
  )
}
