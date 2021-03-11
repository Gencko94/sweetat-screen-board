import moment from 'moment';
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
        return (
          <>
            <Text>Pending</Text>
            <StatusColor col="#FFAF46" />
          </>
        );
      case 2:
        return (
          <>
            <Text>Accepted</Text>
            <StatusColor col="#46A9FF" />
          </>
        );

      case 3:
        return (
          <>
            <Text>Delivery Assigned</Text>
            <StatusColor col="#46A9FF" />
          </>
        );
      case 4:
        return (
          <>
            <Text>Picked Up</Text>
            <StatusColor col="#46A9FF" />
          </>
        );

      case 5:
        return (
          <>
            <Text>Completed</Text>
            <StatusColor col="#1d9e42" />
          </>
        );
      case 6:
        return (
          <>
            <Text>Cancelled</Text>
            <StatusColor col="#b72b2b" />
          </>
        );

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
      <Row>
        <Text>{order.restaurant.name}</Text>
      </Row>
      <Row>
        <Text>{order.restaurant.phone_number}</Text>
      </Row>
      <Row>
        <Text>{order.unique_order_id}</Text>
      </Row>
      <Row>
        <Text>{moment(order.created_at, 'YYYY-MM-DD HH:mm:ss').fromNow()}</Text>
      </Row>
      <Row>{getStatus(order.orderstatus_id)}</Row>
    </TableRow>
  );
};

export default Order;
const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 1fr 1fr 1fr 1fr 1fr;
  gap: 0.25rem;
  margin: 1rem 0;
`;
const Logo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 1px solid rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
`;
const Row = styled.div`
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Text = styled.h6`
  text-align: center;
`;
const StatusColor = styled.div<{ col: string }>`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${props => props.col};
  margin-left: 0.5rem;
`;
