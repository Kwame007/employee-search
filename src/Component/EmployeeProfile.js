import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useParams } from "react-router-dom";
import useFetchEmployeeProfile from "./useFetchEmployeeProfile";
import Loading from "./Loading";

const EmployeeProfile = (props) => {
  const { id } = useParams();

  let { document, isLoading } = useFetchEmployeeProfile(id);

  return (
    <>
      <Loading isLoading={isLoading} />

      {!isLoading &&
        document.map((employee) => {
          return (
            <Container className="mt-5" key={employee.id}>
              <Row className="mt-5">
                <Col md={4}>
                  <Image
                    rounded={true}
                    fluid={true}
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                  ></Image>
                </Col>
                <Col md={8}>
                  <h5>Full Name : {employee.user.fullname}</h5>
                  <p>Age : {employee.user.age}</p>
                  <p>Department : {employee.user.department}</p>
                  <p>Position : {employee.user.position}</p>
                  <p>Empolyee ID : {employee.user.id}</p>
                  <p>Biography : {employee.user.bio}</p>
                </Col>
              </Row>
            </Container>
          );
        })}
    </>
  );
};
export default EmployeeProfile;
