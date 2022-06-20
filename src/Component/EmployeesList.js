import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const NotFound = () => {
  return (
    <Card>
      {" "}
      <Card.Body>
        {" "}
        <Card.Title>Sorry No User Found!</Card.Title>{" "}
      </Card.Body>{" "}
    </Card>
  );
};

const EmployeesList = ({ doc, isLoading }) => {
  return (
    <Card style={{ width: "100%" }} className="mt-5 p-0">
      <Loading isLoading={isLoading} />
      <ListGroup variant="flush">
        {!isLoading &&
          doc.map((employee) => {
            return (
              <Link
                to={`/profile/${employee.id}`}
                key={employee.id}
                style={{ textDecoration: "none" }}
              >
                <ListGroup.Item className="py-4">
                  {employee.value.fullname}
                </ListGroup.Item>
              </Link>
            );
          })}
        {doc.length === 0 && !isLoading && <NotFound />}
      </ListGroup>
    </Card>
  );
};
export default EmployeesList;
