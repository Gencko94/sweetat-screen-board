import styled from "styled-components";
import { useQueryClient } from "react-query";
import Loader from "react-loader-spinner";
import moment from "moment";
import { useContext } from "react";

import Flex from "../Flex/Flex";
import Heading from "../Heading/Heading";
import Paragraph from "../Paragraph.tsx/Paragraph";

import { DataContext } from "../../contexts/DataContext";
import MagicRainbowButton from "../Button/MagicRainbowButton";
import Seperator from "../Spacer/Spacer";
import { up } from "../../constants";

const Info = () => {
  const queryClient = useQueryClient();
  const { orders, isFetching, dataUpdatedAt, isLoading } =
    useContext(DataContext);

  const fetchNow = () => {
    queryClient.invalidateQueries("data");
  };

  return (
    <Container>
      <Heading tag="h5" type="normal-heading">
        Total Orders ({isLoading ? "-" : orders?.length})
      </Heading>

      <Flex items="center" justify="space-between">
        <Paragraph fontSize="0.9rem">
          Last Fetch {dataUpdatedAt !== 0 && moment(dataUpdatedAt).fromNow()}
        </Paragraph>
        <Seperator size={20} />
        <MagicRainbowButton
          disabled={isFetching}
          isLoading={isFetching}
          onClick={() => fetchNow()}
        >
          Fetch Now
        </MagicRainbowButton>
      </Flex>
    </Container>
  );
};

export default Info;
const Container = styled.div(
  ({ theme: { breakpoints } }) => `
  margin-bottom:2rem;
  ${up(breakpoints.md)}{
    margin-bottom:1rem;
    display:flex;
    align-items:center;
    justify-content:space-between;

  }

`
);
