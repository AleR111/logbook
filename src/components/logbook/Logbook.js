import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import MuiAccordion from "@mui/material/Accordion"
import MuiAccordionDetails from "@mui/material/AccordionDetails"
import MuiAccordionSummary from "@mui/material/AccordionSummary"
import { styled } from "@mui/material/styles"
import Typography from "@mui/material/Typography"
import { useEffect, useState } from "react"
// import styles from "./logbook.module.scss"

const Accordion = styled((props) => (
  <MuiAccordion disableGutters={true} elevation={0} square={true} {...props} />
))(() => ({
  border: "none",
  "& .Mui-expanded": {
    backgroundColor: "#F3FCFF",
  },
}))

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  marginRight: theme.spacing(0),
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(0),
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  padding: "20px 20px",
  backgroundColor: "#F3FCFF",
}))

export const Logbook = () => {
  const [content, setContent] = useState([])
  console.log(content)
  useEffect(() => {
    console.log(111)
    ;(async () => {
      const response = await fetch("https://sweb.ru/export/turbojournal/")
      const text = await response.text()
      const parser = new DOMParser()
      const xmlDoc = parser.parseFromString(text, "text/xml")

      // document.getElementById("demo").innerHTML =
      //   xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue
      const data = xmlDoc.getElementsByTagName("item")
      console.log(Array.from(data))
      setContent(Array.from(data))
    })()
  }, [])

  return (
    <div>
      {content.map((el, idx) => {
        return (
          <Accordion key={idx}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{el.childNodes[0].textContent}</Typography>
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
