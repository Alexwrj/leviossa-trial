import React, { FC } from 'react';
import { Container } from 'react-bootstrap';
import './style.scss';

const MainLayout: FC = ({ children }) => (
  <Container fluid="xl">
    {children}
  </Container>
);

export default MainLayout;
