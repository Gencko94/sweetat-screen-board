import styled, { css } from 'styled-components';
import { useQueryClient } from 'react-query';
import Loader from 'react-loader-spinner';
import moment from 'moment';
import { useContext } from 'react';

import { DataProvider } from '../../pages/Home';
import { ThemeContext } from '../../contexts/ThemeContext';

const Info = () => {
  const queryClient = useQueryClient();
  const { orders, isFetching, dataUpdatedAt, isLoading } = useContext(
    DataProvider
  );
  const { mode } = useContext(ThemeContext);

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
          <Loader type="TailSpin" color="#9E46BC" height={25} width={25} />
        ) : (
          ''
        )}
        <LastFetch>
          Last Fetch {dataUpdatedAt !== 0 && moment(dataUpdatedAt).fromNow()}
        </LastFetch>
        <FetchButton mode={mode} onClick={() => fetchNow()}>
          Fetch Now
        </FetchButton>
      </InfoContainer>
    </Container>
  );
};

export default Info;
const Container = styled.div``;
const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.25rem;
  border-bottom: 1px solid ${props => props.theme.btnBorder};
`;
const TotalOrders = styled.h5`
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
const FetchButton = styled.button<{ mode?: string }>`
  background-color: ${props => props.theme.btnPrimaryLight};
  padding: 0.5rem;
  color: ${props => props.theme.btnText};
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: ${props => props.theme.font.bold};
  display: flex;
  align-items: center;
  justify-content: center;
  ${props =>
    props.mode === 'dark' &&
    css`
      border: 1px solid ${props => props.theme.btnBorder};
    `}
  ${props =>
    props.mode === 'light' &&
    css`
      border: 1px solid ${props => props.theme.mainColor};
    `}
`;

const Text = styled.p`
  font-weight: ${props => props.theme.font.bold};
  margin: 0 0.5rem;
`;
