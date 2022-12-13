import { styled } from "../../stitches.config";

export const Container = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "24px",
  gap: "24px",
  width: "320px",
  height: "22px",
  background: "#EEEEEE",
  borderRadius: "4px",
  marginBottom: "9px",
  transition: "all 0.5s ease-in-out",
  cursor: "pointer",

  "&:hover": {
    background: "#D1D1D1",
  },
});

export const BackChevron = styled("img", {
  variants: {
    status: {
      inProgress: {
        opacity: "0.1",
      },
    },
  },
});

export const BranchName = styled("p", {
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "22px",
  letterSpacing: "-0.0125em",
  color: "#515151",
});
