import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import MuiAccordion from "@mui/material/Accordion"
import MuiAccordionDetails from "@mui/material/AccordionDetails"
import MuiAccordionSummary from "@mui/material/AccordionSummary"
import { styled } from "@mui/material/styles"
import Typography from "@mui/material/Typography"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getArticles } from "../../store/articles/thunks"
import styles from "./logbook.module.scss"

const Accordion = styled((props) => (
  <MuiAccordion disableGutters={true} elevation={0} square={true} {...props} />
))(() => ({
  // borderBottom: "2px solid #F7FAFB",
  // minHeight: "60px",
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
  const articles = useSelector((state) => state.articlesStore.data)

  useEffect(() => {
    dispatch(getArticles())
  }, [dispatch])

  return (
    <div className={styles.block}>
      <h4 className={styles.upHeader}>Бортовой журнал</h4>
      <h1 className={styles.header}>Бортовой журнал</h1>
      {articles.map((el, idx) => {
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
      })}
    </div>
  )
}
