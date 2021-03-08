import styled from 'styled-components';
import Icons from './Icons';
import Today from './Today';

const Header = () => {
  return (
    <Container>
      <Today />
      <Logo src="/logo.png" alt="Sweetat-logo" />
      <Icons />
    </Container>
  );
};

export default Header;

const Container = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.img`
  width: 150px;
`;
