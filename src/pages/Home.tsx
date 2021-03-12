import { ChangeEventHandler, createContext, useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import Header from '../components/Header/Header';
import Panel from '../components/Panel/Panel';
import Layout from '../layout/Layout';
import { OrderT, ResponseT } from '../interfaces/DataTypes';
import { getData } from '../utils/queries';
import useSound from 'use-sound';
import Modal from '../components/Modal/Modal';

interface ContextProps {
  isLoading: boolean;
  dataUpdatedAt: number;
  isFetching: boolean;
  changeVolume: ChangeEventHandler<HTMLInputElement>;
  volume: number;
  fetchInterval: any;
  setFetch: (option: any) => void;
  orders: OrderT[] | undefined;
  pending: number | undefined;
  accepted: number | undefined;
}

export const DataProvider = createContext<ContextProps>({
  orders: undefined,
  accepted: undefined,
  pending: undefined,
  isLoading: true,
  dataUpdatedAt: 0,
  volume: 1,
  isFetching: false,
  changeVolume: () => {},
  fetchInterval: 5,
  setFetch: () => {},
});

function Home() {
  const [volume, setVolume] = useState(1);
  const [play] = useSound('/bell.mp3', {
    volume,
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [fetchInterval, setFetchInterval] = useState<number>(5);
  const { isLoading, data, dataUpdatedAt, isFetching } = useQuery<ResponseT>(
    'data',
    getData,
    {
      refetchInterval: fetchInterval * 1000,
      refetchOnWindowFocus: false,

      isDataEqual: (oldData, newData) => {
        if (!oldData) {
          return false;
        } else {
          if (newData?.data.length > oldData?.data.length) {
            if (newData.data[0].orderstatus_id === 1) {
              console.log('true');
              play();
              setModalOpen(true);
              setTimeout(() => {
                setModalOpen(false);
              }, 5000);
            }
            return false;
          }
          return false;
        }
      },
    }
  );
  const setFetch = (option: any) => {
    setFetchInterval(parseInt(option));
  };
  const changeVolume: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setVolume(parseFloat(target.value));
  };
  return (
    <Layout>
      {modalOpen && <Modal />}
      <DataProvider.Provider
        value={{
          orders: data?.data,
          pending: data?.pending,
          accepted: data?.accepted,
          isLoading,
          isFetching,
          dataUpdatedAt,
          changeVolume,
          fetchInterval,
          setFetch,
          volume,
        }}
      >
        <Header />
        <Container>
          <Panel />
        </Container>
      </DataProvider.Provider>
    </Layout>
  );
}

export default Home;
const Container = styled.div`
  background-color: ${props => props.theme.bodyColor};
  max-width: 1560px;
  margin: 0 auto;
  padding: 1rem;
`;
