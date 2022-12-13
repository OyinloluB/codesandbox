import Card from "../../core/card";
import { Container, Status } from "./styles";

export type BranchStatusProps = {
  branches?: string[]; // An array of strings representing the branches
};

const BranchStatus = ({ branches }: BranchStatusProps) => {
  return (
    <Container>
      <div>
        <Status>In Progress ({branches?.length})</Status>
        {branches?.map((branch) => ( 
          <Card key={branch} text={branch} />
        ))}
      </div>
      <div></div>
      <div></div>
    </Container>
  );
};

export default BranchStatus;