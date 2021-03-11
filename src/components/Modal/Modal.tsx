import styled from 'styled-components';

const Modal = () => {
  return <Container>A New Order has been Added !</Container>;
};

export default Modal;
const Container = styled.div`
  position: fixed;
  top: 10px;
  width: 300px;
  left: 0;
  right: 0;
  margin: auto;
  background-color: ${props => props.theme.green};
  color: #fff;
  text-align: center;
  z-index: 2;
  font-weight: ${props => props.theme.font.bold};
  padding: 0.5rem;
  border-radius: 6px;
`;
