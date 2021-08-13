import { useTranslation } from "react-i18next";
import styled, { css } from "styled-components";
import ThemeToggler from "./ThemeToggler";
import { BsFillGearFill } from "react-icons/bs";
import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

import { CSSTransition } from "react-transition-group";

import { ConfigContext } from "../../contexts/ConfigContext";
import Flex from "../Flex/Flex";
import DarkModeToggleContainer from "../DarkModeToggle/DarkModeToggle";
import IconButton from "../Button/IconButton";
import { up } from "../../constants";
const Icons = () => {
  const { ready, i18n } = useTranslation();
  const { colorMode } = useContext(ThemeContext);
  const { handleToggleDrawer } = useContext(ConfigContext);
  const [open, setOpen] = useState(false);
  const { changeVolume, volume, fetchInterval, setFetch } =
    useContext(ConfigContext);
  const changeLanguage = (lng: string) => {
    if (ready) {
      i18n.changeLanguage(lng);
    }
  };
  return (
    <Container>
      {/* <LanguageContainer>
        <>
          {i18n.language === "ar" && (
            <Icon onClick={() => changeLanguage("en")}>English</Icon>
          )}
          {i18n.language === "en" && (
            <Icon onClick={() => changeLanguage("ar")}>العربية</Icon>
          )}
        </>
      </LanguageContainer> */}
      <DarkModeToggleContainer />
      <IconButton onClick={() => handleToggleDrawer?.()}>
        <BsFillGearFill />
      </IconButton>
      <CSSTransition in={open} timeout={150} classNames="dd" unmountOnExit>
        <DropDownContainer mode={colorMode}>
          <Block>
            <Text>Volume</Text>
            <RangeInput
              value={volume}
              onChange={changeVolume}
              type="range"
              min={0}
              max={1}
              step={0.1}
            />
          </Block>
          <Block>
            <Text>Fetch/(s)</Text>
            <Input
              mode={colorMode}
              type="number"
              value={fetchInterval}
              onChange={(e) => setFetch?.(e.target.value)}
            />
          </Block>
        </DropDownContainer>
      </CSSTransition>
    </Container>
  );
};

export default Icons;
const Container = styled.div(
  ({ theme: { breakpoints } }) => `
  display:flex;
  align-items:center;
  justify-content:flex-end;
  ${up(breakpoints.md)}{
    flex-basis:25%;
    justify-content:center;

  }
`
);
const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0;
`;
const Text = styled.p`
  font-weight: ${(props) => props.theme.font.semibold};
  margin: 0 0.5rem;
  font-size: 0.9rem;
`;
const DropDownContainer = styled.div<{ mode?: string }>`
  position: absolute;
  left: 50%;
  margin-left: -100px;
  padding: 0.5rem;
  top: 150%;
  width: 175px;
  position: absolute;
  left: 50%;
  margin-left: -90px;
  ${(props) =>
    props.mode === "light" &&
    css`
      box-shadow: ${(props) => props.theme.shadow};
    `};
  ${(props) =>
    props.mode === "dark" &&
    css`
      border: ${(props) => props.theme.border};
    `}
  border-radius: 6px;
  background-color: ${(props) => props.theme.subtleBackground};
  z-index: 2;
`;
const RangeInput = styled.input`
  min-width: 0;
  padding: 0.25rem 0;
`;
const Input = styled.input<{ mode?: string }>`
  padding: 0.25rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme.subtleBackground};
  min-width: 0;
  width: 75px;
  font-size: 0.8rem;
  font-weight: ${(props) => props.theme.font.bold};
  text-align: center;
  color: ${(props) => props.theme.textAlt};
  ${(props) =>
    props.mode === "dark" &&
    css`
      border: ${(props) => props.theme.border};
    `}
`;
