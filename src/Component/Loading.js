import React from "react";
import { Button, Spinner } from "react-bootstrap";

const Loading = (props) => {
  return (
    <>
      {props.isLoading && (
        <Button
          variant="primary"
          className="w-25 mx-auto mt-5"
          size="sm"
          disabled
        >
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </Button>
      )}
    </>
  );
};
export default Loading;
