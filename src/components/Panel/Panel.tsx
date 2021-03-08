import styled from 'styled-components';
import Info from './Info';
import Table from './Table';
import Thumbnails from './Thumbnails';

const Panel = () => {
  return (
    <Container>
      <Thumbnails />
      <Info />
      <Table />
    </Container>
  );
};

export default Panel;
const Container = styled.div``;
