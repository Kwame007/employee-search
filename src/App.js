import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "react-bootstrap";
import Layout from "./Routes/routes";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Container>
          <Layout />
        </Container>
      </React.Fragment>
    </Router>
  );
}

export default App;
