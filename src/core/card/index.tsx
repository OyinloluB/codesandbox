import { Container, BackChevron, BranchName } from "./styles";
import forwardChevron from "../../assets/forward-chevron.svg";
import backChevron from "../../assets/back-chevron.svg";

export type CardProps = {
  text: string; // sets the CardProps type to a string
};

const Card = ({ text }: CardProps) => {
  return (
    <Container>
      <BackChevron
        src={backChevron}
        alt="previous-branch"
        status="inProgress"
      />
      <BranchName>{text}</BranchName>
      <img src={forwardChevron} alt="next-branch" />
    </Container>
  );
};

export default Card;
