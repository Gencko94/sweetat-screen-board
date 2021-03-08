import styled from 'styled-components';

const Thumbnails = () => {
  return (
    <Container>
      <UsersBox>
        <Number>2,864</Number>
        <Text>Users Online</Text>
      </UsersBox>
      <PendingBox>
        <Number>2,864</Number>
        <Text>Pending Orders</Text>
      </PendingBox>
      <AcceptedBox>
        <Number>2,864</Number>
        <Text>Accepted Orders</Text>
      </AcceptedBox>
    </Container>
  );
};

export default Thumbnails;
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.2rem;
  color: #fff;
  margin-bottom: 0.5rem;
`;
const Number = styled.h3`
  font-weight: ${props => props.theme.font.xbold};
`;
const Text = styled.h4`
  font-weight: ${props => props.theme.font.bold};
`;
const UsersBox = styled.div`
  background-color: ${props => props.theme.usersBg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0.5rem;
  border-radius: 12px;
`;
const PendingBox = styled.div`
  background-color: ${props => props.theme.pendingBg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0.5rem;
  border-radius: 12px;
`;
const AcceptedBox = styled.div`
  background-color: ${props => props.theme.acceptedBg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0.5rem;
  border-radius: 12px;
`;
