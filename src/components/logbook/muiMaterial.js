import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp"
import MuiAccordion from "@mui/material/Accordion"
import MuiAccordionDetails from "@mui/material/AccordionDetails"
import MuiAccordionSummary from "@mui/material/AccordionSummary"
import { styled } from "@mui/material/styles"

export const Accordion = styled((props) => (
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
export const AccordionSummary = styled((props) => (
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

export const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  paddingLeft: "20px",
  paddingRight: "20px",
  backgroundColor: "#F3FCFF",
}))
