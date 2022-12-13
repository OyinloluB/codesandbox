import { styled } from "../../stitches.config";

export const Container = styled("div", {
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
  gridGap: "1rem",
  transition: 'all 0.3s ease-in-out',
  marginTop: '75px'
});

export const Status = styled("p", {
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "12px",
  lineHeight: "15px",
  letterSpacing: "-0.0125em",
  color: "#515151",
  marginBottom: '19px',
});