import styled from 'styled-components';
import Icons from './Icons';
import Today from './Today';

const Header = () => {
  return (
    <Container>
      <Today />
      <LogoContainer>
        <Logo src="/logo.png" alt="Sweetat-logo" />
      </LogoContainer>
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
const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
`;
const Logo = styled.img`
  width: 150px;
`;
