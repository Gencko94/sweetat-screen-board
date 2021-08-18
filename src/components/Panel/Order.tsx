import moment from "moment";

import { useMemo } from "react";
import styled from "styled-components";
import { up } from "../../constants";
import { OrderT } from "../../interfaces/DataTypes";

import Paragraph from "../Paragraph.tsx/Paragraph";
import Spacer from "../Spacer/Spacer";

interface IProps {
  order: OrderT;
}

const Order: React.FC<IProps> = ({ order }) => {
  const url = useMemo(() => {
    return "https://sweetat.co";
  }, []);

  // If Order is ```Pending``` and ```created_at``` is less than 5 Minutes then Color as New
  const isNew = useMemo(() => {
    if (
      order.orderstatus_id === 1 &&
      moment(Date.now()).diff(moment(order.created_at, "YYYY-MM-DD HH:mm:ss")) <
        300000
    ) {
      return true;
    } else {
      return false;
    }
  }, [order.created_at, order.orderstatus_id]);

  // If Order is ```Pending``` and ```created_at``` is more than 5 Minutes then Color as Stale
  const isStale = useMemo(() => {
    if (
      order.orderstatus_id === 1 &&
      moment(Date.now()).diff(moment(order.created_at, "YYYY-MM-DD HH:mm:ss")) >
        300000
    ) {
      return true;
    } else {
      return false;
    }
  }, [order.created_at, order.orderstatus_id]);
  const getStatus = (status: number) => {
    switch (status) {
      case 1:
        return (
          <>
            <Dot col="#FFAF46" />
            <Spacer size={5} />
            <Paragraph fontSize="1.1rem" style={{ color: "#FFAF46" }}>
              Pending
            </Paragraph>{" "}
          </>
        );
      case 2:
        return (
          <>
            <Dot col="#2e87fc" />
            <Spacer size={5} />
            <Paragraph fontSize="1.1rem" style={{ color: "#2e87fc" }}>
              Accepted
            </Paragraph>{" "}
          </>
        );

      case 3:
        return (
          <>
            <Dot col="#1d9e42" />
            <Spacer size={5} />
            <Paragraph
              fontSize="1.1rem"
              align="center"
              style={{ color: "#1d9e42" }}
            >
              Delivery Assigned
            </Paragraph>
          </>
        );
      case 4:
        return (
          <>
            <Dot col="#1d9e42" />
            <Spacer size={5} />
            <Paragraph fontSize="1.1rem" style={{ color: "#1d9e42" }}>
              Picked Up
            </Paragraph>{" "}
          </>
        );

      case 5:
        return (
          <>
            <Dot col="#1d9e42" />
            <Spacer size={5} />
            <Paragraph fontSize="1.1rem" color="secondary">
              Completed
            </Paragraph>{" "}
          </>
        );
      case 6:
        return (
          <>
            <Dot col="#b72b2b" />
            <Spacer size={5} />
            <Paragraph fontSize="1.1rem" style={{ color: "#b72b2b" }}>
              Cancelled
            </Paragraph>
          </>
        );

      default:
        break;
    }
  };
  return (
    <Container isNew={isNew} isStale={isStale}>
      <div className="field">
        <Logo
          src={`${url}/${order.restaurant.logo}`}
          alt={order.restaurant.name}
        />
        <Spacer size={10} />
        <Paragraph fontSize="1.1rem">{order.restaurant.name}</Paragraph>
      </div>
      <div className="field">
        <Paragraph fontSize="1.1rem">{order.payment_mode}</Paragraph>
      </div>
      <div className="field">
        <Paragraph fontSize="1.1rem">
          {order.delivered_by_sweetat === 0 ? "Restaurant" : "Sweetat"}
        </Paragraph>
      </div>
      <div className="field">
        <Paragraph fontSize="1.1rem">{order.restaurant.phone_number}</Paragraph>
      </div>
      <div className="field">
        <Paragraph fontSize="1.1rem">{order.total} KD</Paragraph>
      </div>
      <div className="field">
        <Paragraph fontSize="1.1rem">{order.unique_order_id}</Paragraph>
      </div>
      <div className="field">
        <Paragraph fontSize="1.1rem">
          {moment(order.created_at, "YYYY-MM-DD HH:mm:ss").fromNow()}
        </Paragraph>
      </div>
      <div className="field">{getStatus(order.orderstatus_id)}</div>
    </Container>
  );
};

export default Order;
const Container = styled.div<{ isNew: boolean; isStale: boolean }>`
  display: grid;
  position: relative;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr minmax(150px, 1fr);
  gap: 0.25rem;
  margin: 0.5rem 0;
  transition: background 250ms ease;
  background-color: ${(props) =>
    props.isNew ? "#11e0237e" : props.isStale ? "#dbdf147d" : "inherit"};
  &::before {
    position: absolute;
    content: " ";
    height: 100%;
    width: 5px;
    background-color: ${(props) =>
      props.isNew ? "#11e0237e" : props.isStale ? "#dbdf147d" : "inherit"};
  }
`;
const Logo = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  box-shadow: 1px solid rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const Dot = styled.div<{ col: string }>(
  ({ theme: { breakpoints }, col }) => `
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${col};
  ${up(breakpoints.md)}{
    width: 12px;
    height: 12px;
  }
  `
);
