import { useContext } from "react";
import styled from "styled-components";
import { DataContext } from "../../contexts/DataContext";
import { OrderT } from "../../interfaces/DataTypes";
import Order from "./Order";

const Table = () => {
  const { orders, isLoading } = useContext(DataContext);

  const tableHeaders = [
    "Rest Name",
    "Mode",
    "Restaurant No",
    "Invoice No",
    "Order Date",
    "Status",
  ];
  if (isLoading) return <>Loading</>;
  return (
    <TableContainer>
      {orders?.length !== 0 && (
        <TableHead>
          {tableHeaders.map((tablehead) => (
            <div className="field">
              <TableHeadRow key={tablehead}>{tablehead}</TableHeadRow>
            </div>
          ))}
        </TableHead>
      )}
      <div>
        {orders?.length === 0 && <NoOrders>No Orders Today :(</NoOrders>}
        {orders?.map((order: OrderT) => (
          <Order key={order.unique_order_id} order={order} />
        ))}
      </div>
    </TableContainer>
  );
};

export default Table;

const TableContainer = styled.div`
  background-color: ${(props) => props.theme.subtleFloating};
  border-radius: 12px;
  overflow-x: auto;
  .field {
    padding: 1rem 0.75rem;
    min-width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
const TableHead = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr minmax(150px, 1fr);
  gap: 0.25rem;
`;
const TableHeadRow = styled.h6`
  font-weight: ${(props) => props.theme.font.semibold};
  /* padding: 1rem 0.75rem; */

  font-size: 1rem;
  min-width: 120px;
`;

const NoOrders = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${(props) => props.theme.font.xbold};
  font-size: 1.5rem;
  padding: 1rem;
`;
