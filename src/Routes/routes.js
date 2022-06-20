import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import Employee from "../Component/Employees";
import Info from "../Component/UI/Info";
import EmployeeProfile from "../Component/EmployeeProfile";

const Layout = () => {
  return (
    <>
      <Route>
        <Link to="/">Home</Link>
      </Route>

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
    </>
  );
};

export default Layout;
