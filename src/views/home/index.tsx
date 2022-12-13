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
import logoLight from "../../assets/logo-light.svg";
import ActionButton from "../../core/button";
import InputField from "../../core/input-field";

// Home component
const Home = () => {
  // State hook variables
  const navigate = useNavigate();
  const [branchURL, setBranchURL] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  // Handles URL field change
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBranchURL(event.target.value);
  };

  // Handles form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Get owner & repository from branch URL
    const parts = branchURL.split("/");
    const owner = parts.slice(3, 4)[0];
    const repository = parts.slice(4, 5)[0];

    setLoading(true);
    axios
      .get(`https://api.github.com/repos/${owner}/${repository}`, {
        method: "GET",
        withCredentials: false,
      })
      .then((response) => {
        const repositoryData = response.data;

        // Once we have the repository data, fetch the list of branches
        axios
          .get(`https://api.github.com/repos/${owner}/${repository}/branches`, {
            method: "GET",
            withCredentials: false,
          })
          .then((response) => {
            // Get branch names
            const branchNames: string[] = response.data.map(
              (branch: any) => branch.name
            );
            // Store branch names in localStorage
            localStorage.setItem("branches", JSON.stringify(branchNames));
            localStorage.setItem(
              "repositoryData",
              JSON.stringify(repositoryData)
            );

            // Navigate to repository page
            navigate(`${repositoryData.name}`);
          });
      })
      .catch((error) => {
        console.log(error)
        setError("Oops! Something went wrong. Try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Container>
      <InnerWrapper>
        <LogoImage src={logoLight} alt="logo-light" />
        <div>
          <InputLabel>Start by pasting the repository URL.</InputLabel>
          <Form onSubmit={handleSubmit}>
            {/* URL field */}
            <InputField
              type="url"
              placeholder="https://"
              value={branchURL}
              handleChange={handleChange}
            />
            {/* Submit button */}
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
