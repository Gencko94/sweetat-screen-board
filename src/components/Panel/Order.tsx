import { useMemo } from 'react';
import styled from 'styled-components';
import { OrderT } from '../../interfaces/DataTypes';

interface IProps {
  order: OrderT;
}

const Order: React.FC<IProps> = ({ order }) => {
  const url = useMemo(() => {
    return 'https://sweetat.co';
  }, []);
  const getStatus = (status: number) => {
    switch (status) {
      case 1:
        return 'Pending';
      case 2:
        return 'Accepted';
      case 3:
        return 'Delivery Assigned';
      case 4:
        return 'Picked Up';
      case 5:
        return 'Completed';
      case 6:
        return 'Canceled';

      default:
        break;
    }
  };
  return (
    <TableRow>
      <Logo
        src={`${url}/${order.restaurant.logo}`}
        alt={order.restaurant.name}
      />
      <Row>{order.restaurant.name}</Row>
      <Row>{order.restaurant.phone_number}</Row>
      <Row>{order.unique_order_id}</Row>
      <Row>{order.created_at}</Row>
      <Row>{getStatus(order.orderstatus_id)}</Row>
    </TableRow>
  );
};

export default Order;
const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 1fr 1fr 1fr 1fr 1fr;
  gap: 0.25rem;
  margin: 1rem;
`;
const Logo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const Row = styled.h6`
  padding: 0.5rem;
  text-align: center;
`;
