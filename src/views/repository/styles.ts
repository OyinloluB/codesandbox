import { styled, keyframes } from "../../stitches.config";

const backArrowBob = keyframes({
  '50%': {
    transform: 'translateX(-3px)',
  },
});

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "8% calc(9% + 10 * ((100vw - 320px) / 480))",
});

export const InnerWrapper = styled("div", {
  width: "100%",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  flexWrap: "wrap",
});

export const BackArrow = styled("img", {
  cursor: "pointer",

  "&:hover": {
    animation: `${backArrowBob} 1200ms linear infinite`,
  }
});

export const RepositoryDataWrapper = styled("div", {
  width: "367px",
});

export const RepositoryName = styled("h2", {
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "48px",
  lineHeight: "57px",
  letterSpacing: "-0.05em",
  color: "#151515",
  marginTop: "0px",
  marginBottom: "5px",
});

export const RepositoryDescription = styled("p", {
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "19px",
  letterSpacing: "-0.0125em",
  color: "#515151",
});

export const StarCountWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  flexWrap: "no-wrap",
});

export const StarCountText = styled("p", {
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "12px",
  lineHeight: "15px",
  letterSpacing: "-0.0125em",
  color: "#515151",
  margin: "0px 9px 0px",
});
