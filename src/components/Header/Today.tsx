import moment from "moment";
import { useEffect, useState } from "react";

import Flex from "../Flex/Flex";
import Heading from "../Heading/Heading";

const Today = () => {
  const [date, setDate] = useState(moment());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate((prev) => moment());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Flex items="center" column justify="center" style={{ flexBasis: "25%" }}>
      <Heading
        style={{ textAlign: "center" }}
        tag="h6"
        type="small-title"
      >{`${date.format("h:mm:ss")}`}</Heading>
      <Heading
        style={{ textAlign: "center" }}
        tag="h6"
        type="small-title"
      >{`${date.format("dddd, MMMM DD YYYY")}`}</Heading>
    </Flex>
  );
};

export default Today;
