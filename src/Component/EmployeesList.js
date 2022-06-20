import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const NotFound = () => {
  return (
    <Card className="w-50 text-center mx-auto mt-5 py-5">
      {" "}
      <Card.Body>
        {" "}
        <Card.Title>
          <h3>Sorry No User Found!</h3>
        </Card.Title>{" "}
      </Card.Body>{" "}
    </Card>
  );
};

const EmployeesList = ({ doc, isLoading }) => {
  return (
    <>
      <Loading isLoading={isLoading} />
      {!isLoading && (
        <Card style={{ width: "100%" }} className="mt-5 p-0">
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
          </ListGroup>
        </Card>
      )}
      {doc.length === 0 && !isLoading && <NotFound />}
    </>
  );
};
export default EmployeesList;
