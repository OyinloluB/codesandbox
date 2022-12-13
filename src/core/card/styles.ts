import { styled } from "../../stitches.config";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "row",
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
