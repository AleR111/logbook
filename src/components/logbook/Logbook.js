import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { Typography, LinearProgress } from "@mui/material"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getArticles } from "../../store/articles/thunks"
import styles from "./logbook.module.scss"
import { Accordion, AccordionSummary, AccordionDetails } from "./muiMaterial"

export const Logbook = () => {
  const dispatch = useDispatch()
  const { data, isPending, error } = useSelector(
    (state) => state.articlesStore,
    // (prev, next) => prev.data.length === next.data.length,
  )

  const render = () => {
    if (isPending) return <LinearProgress />
    if (error) return <h2 className={styles.error}>{error}</h2>
    return data.map((el, idx) => {
      return (
        <Accordion key={idx}>
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon sx={{ color: "#3DBDF6", fontSize: "24px" }} />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={styles.accordionHeader}>
              {el.childNodes[0].textContent}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div
              dangerouslySetInnerHTML={{
                __html: el.childNodes[4].textContent,
              }}
            />
          </AccordionDetails>
        </Accordion>
      )
    })
  }

  useEffect(() => {
    dispatch(getArticles())
  }, [dispatch])

  return (
    <div className={styles.block}>
      <h4 className={styles.upHeader}>Бортовой журнал</h4>
      <h1 className={styles.header}>Бортовой журнал</h1>
      {render()}
    </div>
  )
}
