import Card from "../../core/card";
import { Container, Status } from "./styles";

export type BranchStatusProps = {
  branches?: string[]; // An array of strings representing the branches
};

const BranchStatus = ({ branches }: BranchStatusProps) => {
  return (
    <Container>
      <div>
        <Status>In Progress ({branches?.length})</Status> // Displays the number of branches
        {branches?.map((branch) => ( 
          <Card key={branch} text={branch} /> // Creates a card for each branch
        ))}
      </div>
      <div></div>
      <div></div>
    </Container>
  );
};

export default BranchStatus;