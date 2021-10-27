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
  borderBottom: "2px solid #F7FAFB",
  "& .Mui-expanded": {
    backgroundColor: "#F3FCFF",
  },
  "&:before": {
    content: "unset",
  },
}))

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  padding: theme.spacing(0),
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  padding: "20px 20px",
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
      <h4>Бортовой журнал</h4>
      <h1>Бортовой журнал</h1>
      {articles.map((el, idx) => {
        return (
          <Accordion key={idx}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#3DBDF6" }} />}
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
