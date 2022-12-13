import { Container } from "./styles";

export type CardProps = {
  text: string;
};

const Card = ({ text }: CardProps) => {
  return (
    <Container>
      <p>{text}</p>
    </Container>
  );
};

export default Card;
