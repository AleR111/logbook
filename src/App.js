import styles from "./app.module.scss"
import { LayoutTop, Footer } from "./components"

export const App = () => {
  return (
    <div className={styles.app}>
      <LayoutTop />
      <Footer />
    </div>
  )
}
