import { Link } from "react-router-dom"
import domains from "./img/domains.svg"
import logbook from "./img/logbook.svg"
import logo from "./img/logo.svg"
import user from "./img/user.svg"
import vps from "./img/vps.svg"
import styles from "./sidebar.module.scss"

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>

      <ul className={styles.list}>
        <li>
          <Link to={"/account"} className={styles.link}>
            <img className={styles.img} src={user} alt="user" /> АККАУНТ
          </Link>
        </li>
        <li>
          <Link to={"/vps"} className={styles.link}>
            <img className={styles.img} src={vps} alt="vps" /> VPS
          </Link>
        </li>
        <li>
          <Link to={"/domains"} className={styles.link}>
            <img className={styles.img} src={domains} alt="domains" /> ДОМЕНЫ
          </Link>
        </li>
        <li>
          <Link to={"/logbook"} className={styles.link}>
            <img className={styles.img} src={logbook} alt="logbook" /> БОРТОВОЙ
            ЖУРНАЛ
          </Link>
        </li>
      </ul>
    </div>
  )
}
