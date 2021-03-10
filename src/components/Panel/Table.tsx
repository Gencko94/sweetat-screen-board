import { useQuery } from 'react-query';
import styled from 'styled-components';
import { OrderT } from '../../interfaces/DataTypes';
import { getData } from '../../utils/queries';
import Order from './Order';

const Table = () => {
  const { isLoading, data, error } = useQuery('data', () => getData(), {
    refetchInterval: 30000,
  });
  console.log('refetched');
  const tableHeaders = [
    '',
    'Restaurant Name',
    'Restaurant No',
    'Invoice No',
    'Order Date',
    'Status',
  ];

  return (
    <Container>
      <TableContainer>
        <TableHeader>
          {tableHeaders.map(tablehead => (
            <TableHeadRow>{tablehead}</TableHeadRow>
          ))}
        </TableHeader>
        <TableBody>
          {data?.data.map((order: OrderT) => (
            <Order key={order.id} order={order} />
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
`;
const TableBody = styled.div``;
