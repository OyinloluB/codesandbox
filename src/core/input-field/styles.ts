import { styled } from "../../stitches.config";

export const Input = styled("input", {
  width: "650px",
  border: "none",
  borderBottom: "1px solid #151515",
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "22px",
  letterSpacing: "-0.0125em",
  color: "#151515",

  "&:placeholder": {
    opacity: "0.2",
  },

  "&:focus": {
    outline: "none",
  },
});
