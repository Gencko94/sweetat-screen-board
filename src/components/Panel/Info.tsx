import styled from 'styled-components';

const Info = () => {
  return (
    <Container>
      <TotalOrders>Total Orders (5)</TotalOrders>
      <LastFetch>Last Fetch 9:53 AM</LastFetch>
      <FetchButton>Fetch Now</FetchButton>
    </Container>
  );
};

export default Info;
const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
`;
const TotalOrders = styled.h4`
  font-weight: ${props => props.theme.font.xbold};
  flex: 1;
`;
const LastFetch = styled.p`
  font-weight: ${props => props.theme.font.semibold};
  margin: 0 1rem;
`;
const FetchButton = styled.button`
  background-color: ${props => props.theme.btnPrimaryLight};
  padding: 0.5rem;
  color: ${props => props.theme.btnText};
  border-radius: 8px;
  font-weight: ${props => props.theme.font.bold};
`;
