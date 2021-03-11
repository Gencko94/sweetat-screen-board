import { useContext } from 'react';
import styled from 'styled-components';
import { OrderT } from '../../interfaces/DataTypes';
import { DataProvider } from '../../pages/Home';
import Order from './Order';

const Table = () => {
  const { orders, isLoading } = useContext(DataProvider);

  const tableHeaders = [
    '',
    'Rest Name',
    'Restaurant No',
    'Invoice No',
    'Order Date',
    'Status',
  ];
  if (isLoading) return <>Loading</>;
  return (
    <Container>
      <TableContainer>
        {orders?.length !== 0 && (
          <TableHeader>
            {tableHeaders.map(tablehead => (
              <TableHeadRow key={tablehead}>{tablehead}</TableHeadRow>
            ))}
          </TableHeader>
        )}
        <TableBody>
          {orders?.length === 0 && <NoOrders>No Orders Today :(</NoOrders>}
          {orders?.map((order: OrderT) => (
            <Order key={order.unique_order_id} order={order} />
          ))}
        </TableBody>
      </TableContainer>
    </Container>
  );
};

export default Table;
const Container = styled.div``;
const TableContainer = styled.div``;
const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 1fr 1fr 1fr 1fr 1fr;
  gap: 0.25rem;
`;
const TableHeadRow = styled.h6`
  font-weight: ${props => props.theme.font.xbold};
  padding: 0.5rem;
  text-align: center;
  font-size: 1.1rem;
`;
const TableBody = styled.div``;
const NoOrders = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${props => props.theme.font.xbold};
  font-size: 1.5rem;
  padding: 1rem;
`;
