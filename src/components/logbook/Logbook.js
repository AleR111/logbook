import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { Typography, LinearProgress } from "@mui/material"
import MuiAccordion from "@mui/material/Accordion"
import MuiAccordionDetails from "@mui/material/AccordionDetails"
import MuiAccordionSummary from "@mui/material/AccordionSummary"
import { styled } from "@mui/material/styles"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getArticles } from "../../store/articles/thunks"
import styles from "./logbook.module.scss"

const Accordion = styled((props) => (
  <MuiAccordion disableGutters={true} elevation={0} square={true} {...props} />
))(() => ({
  "& .Mui-expanded": {
    backgroundColor: "#F3FCFF",
  },
  "&:before": {
    height: "2px",
    left: "20px",
    right: "20px",
    backgroundColor: "#F7FAFB",
  },
}))

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(() => ({
  paddingLeft: "20px",
  paddingRight: "20px",

  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
  },
  "& .MuiAccordionSummary-content": {
    margin: "20px 0",
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  paddingLeft: "20px",
  paddingRight: "20px",
  backgroundColor: "#F3FCFF",
}))

export const Logbook = () => {
  const dispatch = useDispatch()
  const { data, isPending, error } = useSelector((state) => state.articlesStore)

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
