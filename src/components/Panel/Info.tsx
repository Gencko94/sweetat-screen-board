import styled from 'styled-components';
import { useQueryClient } from 'react-query';
import Loader from 'react-loader-spinner';
import moment from 'moment';
import { useContext } from 'react';

import { DataProvider } from '../../pages/Home';

const Info = () => {
  const queryClient = useQueryClient();
  const {
    orders,
    isFetching,
    dataUpdatedAt,
    isLoading,
    fetchInterval,
    setFetch,
  } = useContext(DataProvider);

  const fetchNow = () => {
    queryClient.invalidateQueries('data');
  };

  return (
    <Container>
      <InfoContainer>
        <TotalOrders>
          Total Orders ({isLoading ? '-' : orders?.length})
        </TotalOrders>

        {isFetching ? (
          <Loader type="TailSpin" color="#9E46BC" height={30} width={30} />
        ) : (
          ''
        )}
        <LastFetch>
          Last Fetch {dataUpdatedAt !== 0 && moment(dataUpdatedAt).fromNow()}
        </LastFetch>
        <FetchButton onClick={() => fetchNow()}>Fetch Now</FetchButton>
      </InfoContainer>
      <FetchingContainer>
        <Text>Fetch Interval(s)</Text>
        <Input
          type="number"
          value={fetchInterval}
          onChange={e => setFetch(e.target.value)}
        />
      </FetchingContainer>
    </Container>
  );
};

export default Info;
const Container = styled.div``;
const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
`;
const TotalOrders = styled.h4`
  font-weight: ${props => props.theme.font.xbold};
  flex: 1;
`;
const FetchingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0.5rem;
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
const Input = styled.input`
  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${props => props.theme.inputColorLight};
  min-width: 0;
  width: 75px;
  font-size: 0.8rem;
  font-weight: ${props => props.theme.font.bold};
  text-align: center;
`;
const Text = styled.p`
  font-weight: ${props => props.theme.font.bold};
  margin: 0 0.5rem;
`;
