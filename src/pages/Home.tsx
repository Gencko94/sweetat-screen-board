import { useQuery } from 'react-query';
import styled from 'styled-components';
import Header from '../components/Header/Header';
import Panel from '../components/Panel/Panel';
import Layout from '../layout/Layout';
import { getData } from '../utils/queries';
function Home() {
  const { isLoading, data, error } = useQuery('data', () => getData());

  return (
    <Layout>
      <Header />
      <Container>
        <Panel />
      </Container>
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
