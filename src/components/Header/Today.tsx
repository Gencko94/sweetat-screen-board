import moment from 'moment';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Today = () => {
  const [date, setDate] = useState(moment());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(prev => moment());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Time>{`${date.format('h:mm:ss')}`}</Time>
      <Date>{`${date.format('dddd, MMMM DD YYYY')}`}</Date>
    </Container>
  );
};

export default Today;

const Container = styled.div`
  /* padding: 0.5rem; */
`;
const Time = styled.h6`
  font-size: 1.5rem;
  font-weight: ${props => props.theme.font.xbold};
  color: ${props => props.theme.headingColor};
  margin-bottom: 0.25rem;
`;
const Date = styled.p`
  color: ${props => props.theme.subHeading};
  font-weight: ${props => props.theme.font.bold};
`;
