import { useEffect, useRef, useState } from "react";
import { ImSpinner2 } from "react-icons/im";
import styled, { CSSProperties } from "styled-components";
import useRainbow from "../../hooks/useRainbow";
import useResponsive from "../../hooks/useResponsive";
import UnstyledButton from "./UnstyledButton";
type DefaultButtonProps = Omit<JSX.IntrinsicElements["button"], "ref">;
interface ButtonProps extends DefaultButtonProps {
  intervalDelay?: number;
  isLoading?: boolean;
}

const MagicRainbowButton: React.FC<ButtonProps> = ({
  intervalDelay = 1000,
  isLoading,
  ...props
}) => {
  const { isDesktop } = useResponsive();

  const colors = useRainbow({ intervalDelay });
  const colorKeys = Object.keys(colors);

  return (
    <Button
      {...props}
      className="btn btn-md-default"
      style={
        {
          ...colors,

          transition: `
          ${colorKeys[0]} 2500ms linear,
          ${colorKeys[1]} 2500ms linear,
          ${colorKeys[2]} 2500ms linear
        `,
          color: "#fff",
          background: `
          radial-gradient(
            circle at top left,
            var(${colorKeys[2]}),
            var(${colorKeys[1]}),
            var(${colorKeys[0]})
          )
        `,
        } as CSSProperties
      }
    >
      {isLoading ? (
        <ImSpinner2 size={isDesktop ? 15 : 18} className="loading" />
      ) : (
        props.children
      )}
    </Button>
  );
};

export default MagicRainbowButton;
const Button = styled(UnstyledButton)`
  padding: 0.5rem;
  border-radius: 6px;
  font-weight: ${(props) => props.theme.font.semibold};
  transition: all 250ms;
  width: 150px;
  height: 45px;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  &:not(:disabled):hover {
    filter: hue-rotate(4deg) saturate(120%) brightness(120%);
  }
  &:not(:disabled):active {
    transform: scale(0.95);
    transition: transform 32ms;
  }
`;
