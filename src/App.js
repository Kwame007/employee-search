import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Employee from "./Component/Employees";
import Info from "./Component/UI/Info";
import EmployeeProfile from "./Component/EmployeeProfile";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Container>
          <Link to="/">Home</Link>

          <Row>
            <Switch>
              <Route exact path="/">
                <Info />
                <Employee />
              </Route>
              <Route path="/profile/:id">
                <EmployeeProfile />
              </Route>
            </Switch>
          </Row>
        </Container>
      </React.Fragment>
    </Router>
  );
}

export default App;
