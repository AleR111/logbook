import { Switch, Route } from "react-router-dom"
import { Header, Sidebar, Content } from "../../components"

import styles from "./layoutTop.module.scss"

export const LayoutTop = () => {
  return (
    <div className={styles.container}>
      <Switch>
        <Route path={["/", "/:selected"]}>
          <Sidebar />
        </Route>
      </Switch>
      <div className={styles.mainContainer}>
        <Header />
        <Content />
      </div>
    </div>
  )
}
