import { CSSProperties, FC } from "react";
import styled from "styled-components";
type DefaultDivProps = Omit<JSX.IntrinsicElements["div"], "ref">;
interface IProps extends DefaultDivProps {
  justify?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-evenly";
  items?: string;
  padding?: string;
  margin?: string;

  wrap?: boolean;
  column?: boolean;
}
const Flex: FC<IProps> = ({
  children,
  items,
  justify,
  padding,
  margin,
  column,
  wrap,
  onClick,
  ...props
}) => {
  return (
    <FlexWrapper
      onClick={onClick}
      column={column}
      padding={padding}
      margin={margin}
      justify={justify}
      items={items}
      {...props}
    >
      {children}
    </FlexWrapper>
  );
};

export default Flex;
export const FlexWrapper = styled.div<{
  column?: boolean;
  margin?: string;
  padding?: string;
  justify?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-evenly";
  items?: string;
}>`
  display: flex;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.items};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};

  flex-direction: ${(props) => (props.column ? "column" : "row")};
`;
