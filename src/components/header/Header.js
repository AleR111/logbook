import classNames from "classnames"
import styles from "./header.module.scss"
import notice from "./img/notice.svg"

export const Header = () => {
  return (
    <div className={styles.nav}>
      <div>100.00 ₽</div>
      <div className={styles.boxCenter}>
        <button className={classNames(styles.button, styles.notice)}>
          <img src={notice} alt="notice" />
        </button>
        <button className={styles.button}>vikavishny</button>
      </div>
      <div>
        <button className={styles.button}>Выйти</button>
      </div>
    </div>
  )
}
