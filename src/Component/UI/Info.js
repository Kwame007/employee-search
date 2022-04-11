import React from "react";
import { Alert } from "react-bootstrap";

const Info = () => {
  return (
    <div>
      <Alert variant="success" className="mt-5">
        <Alert.Heading>Instructions ℹ️</Alert.Heading>
        <ul>
          <li>Search for a user by name or id 👤</li>
          <li>Click on a user to view profile</li>
        </ul>
      </Alert>
    </div>
  );
};
export default Info;
