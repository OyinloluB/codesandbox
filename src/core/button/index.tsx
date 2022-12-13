import { Button } from "./styles";

export type ActionButtonProps = React.ComponentProps<typeof Button>; // Sets the type of props to those of the Button component

const ActionButton = (props: any) => {
  // Receives props as an argument
  return <Button {...props} />; // Returns the Button component with the props
};

export default ActionButton;
