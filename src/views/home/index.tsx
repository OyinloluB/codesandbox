import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import {
  Container,
  InnerWrapper,
  LogoImage,
  Form,
  InputLabel,
  ErrorMessage,
} from "./styles";
import logo from "../../assets/logo.svg";
import ActionButton from "../../core/button";
import InputField from "../../core/input-field";

const Home = () => {
  const navigate = useNavigate();
  // set state variables
  const [branchURL, setBranchURL] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  // handler when input changes
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBranchURL(event.target.value);
  };

  // handler when form is submitted
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // get repository name and owner from URL
    const parts = branchURL.split("/");
    const owner = parts.slice(3, 4)[0];
    const repository = parts.slice(4, 5)[0];

    setLoading(true);

    try {
      // get repository data from github API
      const response = await axios.get(
        `https://api.github.com/repos/${owner}/${repository}`,
        {
          method: "GET",
          withCredentials: false,
        }
      );

      const repositoryData = response.data;

      // get branch names from github API
      const branchesResponse = await axios.get(
        `https://api.github.com/repos/${owner}/${repository}/branches`,
        {
          method: "GET",
          withCredentials: false,
        }
      );

      // store branch names and repository data in localStorage
      const branchNames: string[] = branchesResponse.data.map(
        (branch: any) => branch.name
      );
      localStorage.setItem("branches", JSON.stringify(branchNames));
      localStorage.setItem("repositoryData", JSON.stringify(repositoryData));
      navigate(`${repositoryData.name}`);
    } catch (err) {
      console.log(err);
      setError("Oops! Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  // render form
  return (
    <Container>
      <InnerWrapper>
        <LogoImage src={logo} alt="logo-light" />
        <div>
          <InputLabel>Start by pasting the repository URL.</InputLabel>
          <Form onSubmit={handleSubmit}>
            <InputField
              type="url"
              placeholder="https://"
              value={branchURL}
              handleChange={handleChange}
            />
            <ActionButton size="sm">
              {loading ? "Loading..." : "Submit"}
            </ActionButton>
          </Form>
          <ErrorMessage>{Boolean(error.length) && error}</ErrorMessage>
        </div>
      </InnerWrapper>
    </Container>
  );
};

export default Home;
