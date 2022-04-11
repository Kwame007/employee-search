import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

const EmployeeSearch = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");
  // console.log(props);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(searchTerm);

    // clear input
    setSearchTerm("");
  };
  return (
    <>
      <Row className="mt-5">
        <Col md={1}></Col>
        <Col md={10}>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    onChange={handleInputChange}
                    value={searchTerm}
                    type="text"
                    placeholder="Seach for an employee..."
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Button variant="primary" className="w-75 m-auto" type="submit">
                  Search
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col md={1}></Col>
      </Row>
    </>
  );
};
export default EmployeeSearch;
