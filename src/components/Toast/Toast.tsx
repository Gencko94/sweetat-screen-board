import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { RiErrorWarningLine } from "react-icons/ri";
import styled from "styled-components";
import { up } from "../../constants";
import useResponsive from "../../hooks/useResponsive";
import Button from "../Button/Button";
import Flex from "../Flex/Flex";
import Heading from "../Heading/Heading";

interface IProps {
  text?: string;
  btnText: string;
  closeFunction: () => void;
  type?: "success" | "error";
}

const Toast = ({ text, btnText, closeFunction, type }: IProps) => {
  const { isDesktop } = useResponsive();
  return (
    <Container type={type}>
      {type === "error" ? (
        <RiErrorWarningLine size={isDesktop ? 40 : 30} />
      ) : (
        <IoIosCheckmarkCircleOutline size={isDesktop ? 40 : 30} />
      )}
      <div className="content">
        <Heading tag="h6">{text}</Heading>

        <Flex justify="flex-end">
          <Button
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              closeFunction();
            }}
          >
            {btnText}
          </Button>
        </Flex>
      </div>
    </Container>
  );
};

export default Toast;
const Container = styled.div<{ type?: "error" | "success" }>(
  ({ theme: { breakpoints, font }, type }) => `
  background-color: ${
    type === "error" ? "rgba(238, 24, 24, 0.95)" : "rgba(20, 148, 20, 0.95)"
  };
    color: #fff;
    display: grid;
    grid-template-columns: 0.2fr 1fr;
    gap: 0.5rem;
    padding: 0.75rem;
    border-radius: 6px 0 0 6px;
    position: fixed;
    top: 75px;
    right: 0px;
    align-items: center;
    z-index: 1000;
    min-width: 250px;
    
    ${up(breakpoints.md)}{
      
      min-width: 350px;
    }
    `
);
