import { styled } from "../../stitches.config";

export const Container = styled("div", {
  display: "flex",
  alignItems: "center",
  padding: "0px calc(9% + 10 * ((100vw - 320px) / 480))",
  height: "100vh",
});

export const InnerWrapper = styled("div", {
  width: "100%",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  flexWrap: "wrap",
});

export const LogoImage = styled("img", {
  width: "167px",
});

export const Form = styled("form", {
  marginTop: "16%",
  display: "flex",
});

export const InputLabel = styled("h2", {
  width: "480px",
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "48px",
  lineHeight: "57px",
  letterSpacing: "-0.05em",
  color: "#151515",
  marginTop: "0px",
});

export const ErrorMessage = styled("p", {
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "22px",
  letterSpacing: "-0.0125em",
  color: "#E75B4F",
});