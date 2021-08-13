import { useContext } from "react";

import { VscChromeClose } from "react-icons/vsc";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import { ConfigContext } from "../../contexts/ConfigContext";
import IconButton from "../Button/IconButton";
import Flex from "../Flex/Flex";
import Heading from "../Heading/Heading";
import Paragraph from "../Paragraph.tsx/Paragraph";
import Spacer from "../Spacer/Spacer";

const Drawer = () => {
  const {
    drawerOpen,
    handleToggleDrawer,
    volume,
    changeVolume,
    fetchInterval,
    setFetch,
  } = useContext(ConfigContext);
  return (
    <>
      <CSSTransition
        in={drawerOpen}
        timeout={250}
        classNames="overlay"
        unmountOnExit
      >
        <Overlay onClick={() => handleToggleDrawer?.()}></Overlay>
      </CSSTransition>
      <CSSTransition
        in={drawerOpen}
        timeout={250}
        classNames="drawer"
        unmountOnExit
      >
        <DrawerContainer>
          <Flex justify="space-between" items="center">
            <Heading tag="h6">Settings</Heading>
            <IconButton onClick={() => handleToggleDrawer?.()}>
              <VscChromeClose />
            </IconButton>
          </Flex>
          <Spacer size={20} />
          <Flex justify="space-between" items="center">
            <Paragraph>Volume</Paragraph>
            <RangeInput
              value={volume}
              onChange={changeVolume}
              type="range"
              min={0}
              max={1}
              step={0.1}
            />
          </Flex>
          <Spacer size={20} />
          <Flex justify="space-between" items="center">
            <Paragraph>Fetch/(s)</Paragraph>
            <Input
              type="number"
              value={fetchInterval}
              onChange={(e) => setFetch?.(e.target.value)}
            />
          </Flex>
        </DrawerContainer>
      </CSSTransition>
    </>
  );
};

export default Drawer;
const Overlay = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  position: fixed;
  inset: 0;
  z-index: 50;
`;
const DrawerContainer = styled.div(
  ({ theme: { breakpoints, subtleBackground } }) => `
    position:fixed;
    padding:0.5rem;
    border-radius:12px 12px 0 0;
    z-index: 51;
    top:400px;
    height:100%;
    left:0;
    right:0;
    background-color:${subtleBackground};



`
);
const RangeInput = styled.input`
  min-width: 0;
  padding: 0.25rem 0;
`;
const Input = styled.input`
  padding: 0.25rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme.subtleBackground};
  min-width: 0;
  width: 75px;
  font-size: 0.8rem;
  font-weight: ${(props) => props.theme.font.bold};
  text-align: center;
  color: ${(props) => props.theme.textAlt};
  border: ${(props) => props.theme.border};
`;
