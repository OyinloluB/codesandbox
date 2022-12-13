import { styled } from "../../stitches.config";

export const Button = styled("button", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "8px 16px",
  gap: "8px",
  height: "38px",
  background: "#EEEEEE",
  borderRadius: "4px",
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "22px",
  letterSpacing: "-0.0125em",
  color: "#151515",
  border: "none",
  marginLeft: "10px",
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",

  variants: {
    size: {
      sm: {
        minWidth: "94px",
      },
    },
  },
});
