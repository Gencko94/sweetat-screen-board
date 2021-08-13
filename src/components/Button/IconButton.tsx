import styled from "styled-components";

import UnstyledButton from "./UnstyledButton";

type DefaultButtonProps = Omit<JSX.IntrinsicElements["button"], "ref">;
interface IProps extends DefaultButtonProps {
  size?: string;
}

const IconButton: React.FC<IProps> = ({ children, size = "40", ...props }) => {
  return (
    <BaseIconButton size={size} {...props}>
      {children}
    </BaseIconButton>
  );
};

export default IconButton;

const BaseIconButton = styled(UnstyledButton)<{ size: string }>`
  opacity: 0.7;
  transition: opacity 250ms;
  position: relative;
  color: ${(props) => props.theme.text};
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;

  &:hover {
    opacity: 1;
  }
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
