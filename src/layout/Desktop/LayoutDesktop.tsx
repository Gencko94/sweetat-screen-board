import React from 'react';
import styled from 'styled-components';

const LayoutDesktop: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default LayoutDesktop;

const Container = styled.div`
  min-height: 100vh;
  font-family: 'Nunito';
`;
