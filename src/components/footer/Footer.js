import styles from "./footer.module.scss"

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <ul className={styles.list}>
          <li>
            © 2001– 2018 ООО{" "}
            <button className={styles.button}>«СпейсВэб»</button>
          </li>
          <li>Все права защищены.</li>
          <li>
            Лицензия <button className={styles.button}>№163230</button>
          </li>
        </ul>
      </div>
      <div>
        <ul className={styles.list}>
          <li>
            <button className={styles.button}>+7 (812) 334-12-22</button> (в
            Санкт-Петербурге)
          </li>
          <li>
            <button className={styles.button}>+7 (495) 663-16-12</button> (в
            Москве)
          </li>
          <li>
            <button className={styles.button}>(800) 100-16-15</button>{" "}
            (бесплатно по России)
          </li>
        </ul>
      </div>
    </footer>
  )
}
