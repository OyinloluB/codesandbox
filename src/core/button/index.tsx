import { Button } from "./styles";

export type ActionButtonProps = React.ComponentProps<typeof Button>;

const ActionButton = (props: any) => {
  return <Button {...props} />;
};

export default ActionButton;
