import { useContext } from "react";
import styled from "styled-components";
import { up } from "../../constants";
import { DataContext } from "../../contexts/DataContext";
import Heading from "../Heading/Heading";
import Paragraph from "../Paragraph.tsx/Paragraph";

const Thumbnails = () => {
  const { pending, accepted, isLoading } = useContext(DataContext);
  console.log(pending);
  return (
    <Container>
      <UsersBox className="stat-item">
        <Heading tag="h6" type="medium-title">
          -
        </Heading>
        <Paragraph weight="semibold">Users Online</Paragraph>
      </UsersBox>
      <PendingBox className="stat-item">
        <Heading tag="h6" type="medium-title">
          {isLoading ? "-" : pending}
        </Heading>
        <Paragraph weight="semibold">Pending Orders</Paragraph>
      </PendingBox>
      <AcceptedBox className="stat-item">
        <Heading tag="h6" type="medium-title">
          {isLoading ? "-" : accepted}
        </Heading>
        <Paragraph weight="semibold">Accepted Orders</Paragraph>
      </AcceptedBox>
    </Container>
  );
};

export default Thumbnails;
const Container = styled.div(
  ({ theme: { breakpoints } }) => `
  display: grid;
  gap: 1.75rem;
  grid-template-columns: 1fr;
  margin-bottom: 0.5rem;
  ${up(breakpoints.md)}{
    
    grid-template-columns: 1fr 1fr 1fr;
  }
  `
);
const StatBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0.5rem;
  border-radius: 12px;
  /* color: #fff !important; */
`;
const UsersBox = styled(StatBox)`
  background-color: ${(props) => props.theme.subtleFloating};
`;
const PendingBox = styled(StatBox)`
  background-color: ${(props) => props.theme.subtleFloating};
  color: ${(props) => props.theme.yellow};
`;
const AcceptedBox = styled(StatBox)`
  color: ${(props) => props.theme.green};
  background-color: ${(props) => props.theme.subtleFloating};
`;
