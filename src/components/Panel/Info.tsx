import styled from 'styled-components';
import { useQueryClient } from 'react-query';
import Loader from 'react-loader-spinner';
import moment from 'moment';

const Info = () => {
  const queryClient = useQueryClient();
  const fetchNow = () => {
    queryClient.invalidateQueries('data');
  };
  const data: any = queryClient.getQueryData('data');
  const { dataUpdatedAt }: any = queryClient.getQueryState('data');

  return (
    <Container>
      <TotalOrders>Total Orders ({data?.data.length})</TotalOrders>
      {queryClient.isFetching() ? (
        <Loader type="TailSpin" color="#9E46BC" height={30} width={30} />
      ) : (
        ''
      )}
      <LastFetch>Last Fetch {moment(dataUpdatedAt).fromNow()}</LastFetch>
      <FetchButton onClick={() => fetchNow()}>Fetch Now</FetchButton>
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
