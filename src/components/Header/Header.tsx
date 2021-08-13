import styled from "styled-components";
import { up } from "../../constants";
import useResponsive from "../../hooks/useResponsive";
import Flex from "../Flex/Flex";
import Icons from "./Icons";
import Today from "./Today";

const Header = () => {
  const { isDesktop } = useResponsive();
  return (
    <Container>
      <Flex items="center" justify="space-between" padding="1rem">
        {isDesktop && <Today />}

        <LogoContainer>
          <img className="logo" src="/logo.png" alt="Sweetat logo" />
        </LogoContainer>
        <Icons />
      </Flex>
    </Container>
  );
};

export default Header;
const Container = styled.div``;
const LogoContainer = styled.div(
  ({ theme: { breakpoints } }) => `
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: flex-start;
  .logo {
    max-height:40px;
  }
  ${up(breakpoints.md)}{    
    justify-content: center;
    .logo{
      max-height:50px;
    }
  }
  ${up(breakpoints.xl)}{   

    .logo{
      max-height:75px;
    }
  }
`
);
