import classNames from "classnames"
import { Link, useParams } from "react-router-dom"
import domains from "./img/domains.svg"
import logbook from "./img/logbook.svg"
import logo from "./img/logo.svg"
import user from "./img/user.svg"
import vps from "./img/vps.svg"
import styles from "./sidebar.module.scss"

export const Sidebar = () => {
  const { selected } = useParams()

  const links = [
    {
      name: "АККАУНТ",
      link: "account",
      img: user,
    },
    {
      name: "VPS",
      link: "vps",
      img: vps,
    },
    {
      name: "ДОМЕНЫ",
      link: "domains",
      img: domains,
    },
    {
      name: "БОРТОВОЙ ЖУРНАЛ",
      link: "logbook",
      img: logbook,
    },
  ]
  return (
    <div className={styles.sidebar}>
      <div className={classNames(styles.link, styles.logo)}>
        <Link to={"/home"} className={styles.link}>
          <img src={logo} className={styles.img} alt="logo" />
        </Link>
      </div>

      <ul className={styles.list}>
        {links.map((el, idx) => (
          <li key={idx}>
            <Link
              to={`/${el.link}`}
              className={classNames(styles.link, {
                [styles.selected]: el.link === selected,
              })}
            >
              <img className={styles.img} src={el.img} alt={el.link} />{" "}
              {el.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
