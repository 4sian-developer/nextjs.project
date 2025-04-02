//? REACT BOOTSTRAP
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";

export function BasicExample() {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export function BorderExample() {
  return <Spinner animation="border" />;
}

export function GrowExample() {
  return <Spinner animation="grow" />;
}

export function SpinnersVariantsExample() {
  return (
    <>
      <Spinner animation="border" variant="primary" />
      <Spinner animation="border" variant="secondary" />
      <Spinner animation="border" variant="success" />
      <Spinner animation="border" variant="danger" />
      <Spinner animation="border" variant="warning" />
      <Spinner animation="border" variant="info" />
      <Spinner animation="border" variant="light" />
      <Spinner animation="border" variant="dark" />
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="danger" />
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="info" />
      <Spinner animation="grow" variant="light" />
      <Spinner animation="grow" variant="dark" />
    </>
  );
}

export function SizesExample() {
  return (
    <>
      <Spinner animation="border" size="sm" />
      <Spinner animation="border" />
      <Spinner animation="grow" size="sm" />
      <Spinner animation="grow" />
    </>
  );
}

export function ButtonExample() {
  return (
    <>
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        <span className="visually-hidden">Loading...</span>
      </Button>
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    </>
  );
}

export function ButtonAccessibilityBasicExample() {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

