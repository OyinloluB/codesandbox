import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  InnerWrapper,
  BackArrow,
  RepositoryDataWrapper,
  RepositoryName,
  RepositoryDescription,
  StarCountWrapper,
  StarCountText,
} from "./styles";
import star from "../../assets/star.svg";
import backArrow from "../../assets/back-arrow.svg";
import BranchStatus from "../../components/statuses";

const Repository = () => {
  const navigate = useNavigate();
  const [branches, setBranches] = useState<string[]>([]);
  const [repositoryData, setrepositoryData] = useState<{ [key: string]: any }>(
    {}
  );

  useEffect(() => {
    const branchesJSON = localStorage.getItem("branches");
    const repositoryDataJSON = localStorage.getItem("repositoryData");

    if (branchesJSON !== null) {
      const branchesArray = JSON.parse(branchesJSON);
      setBranches(branchesArray);
    }

    if (repositoryDataJSON !== null) {
      const repositoryArray = JSON.parse(repositoryDataJSON);
      setrepositoryData(repositoryArray);
    }
  }, []);

  console.log(branches, repositoryData);

  return (
    <Container>
      <InnerWrapper>
        <BackArrow src={backArrow} alt="go-back" onClick={() => navigate(-1)} />
        <RepositoryDataWrapper>
          <RepositoryName>{repositoryData.name}</RepositoryName>
          <RepositoryDescription>
            {repositoryData.description}
          </RepositoryDescription>
        </RepositoryDataWrapper>
        <StarCountWrapper>
          <img src={star} alt="stars-count" />
          <StarCountText>{repositoryData.stargazers_count}</StarCountText>
        </StarCountWrapper>
      </InnerWrapper>
      <BranchStatus branches={branches} />
    </Container>
  );
};

export default Repository;
