"use client";

//? React Built-in
import React, { useEffect, useState } from "react";
//? REACT BOOTSTRAP
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

export function LoadingButton() {

  //? State to track the loading state of the button
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    //* Function to simulate a network request (resolves after 2 seconds)
    function simulateNetworkRequest() {
      return new Promise(resolve => {
        setTimeout(resolve, 2000);
      });
    }

    //* If `isLoading` is true, start the network request simulation
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        //* Reset loading state when request completes
        setLoading(false);
      });
    }
  }, [isLoading]);

  //? Function to set `isLoading` to true when button is clicked
  const handleClick = () => setLoading(true);

  return (
    <Button
      variant="primary"
      //? Disable button when loading
      disabled={isLoading}
      //? Prevent multiple clicks
      onClick={!isLoading ? handleClick : undefined}
    >
      {/* Dynamic button text */}
      {isLoading ? 'Loading…' : 'Click to load'}
    </Button>
  );
}

export function TypesExample() {
  return (
    <>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="info">Info</Button>
      <Button variant="light">Light</Button>
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
    </>
  );
}

export function OutlineTypesExample() {
  return (
    <>
      <Button variant="outline-primary">Primary</Button>
      <Button variant="outline-secondary">Secondary</Button>
      <Button variant="outline-success">Success</Button>
      <Button variant="outline-warning">Warning</Button>
      <Button variant="outline-danger">Danger</Button>
      <Button variant="outline-info">Info</Button>
      <Button variant="outline-light">Light</Button>
      <Button variant="outline-dark">Dark</Button>
    </>
  );
}

export function TagTypesExample() {
  return (
    <>
      <Button href="#">Link</Button> <Button type="submit">Button</Button>
      <Button as="input" type="button" value="Input" />
      <Button as="input" type="submit" value="Submit" />
      <Button as="input" type="reset" value="Reset" />
    </>
  );
}

export function SizesExample() {
  return (
    <>
      <div className="d-flex gap-2 mb-2">
        <Button variant="primary" size="lg">
          Large button
        </Button>
        <Button variant="secondary" size="lg">
          Large button
        </Button>
      </div>
      <div className="d-flex gap-2">
        <Button variant="primary" size="sm">
          Small button
        </Button>
        <Button variant="secondary" size="sm">
          Small button
        </Button>
      </div>
    </>
  );
}

function BlockExample() {
  return (
    <div className="d-grid gap-2">
      <Button variant="primary" size="lg">
        Block level button
      </Button>
      <Button variant="secondary" size="lg">
        Block level button
      </Button>
    </div>
  );
}

function ActiveExample() {
  return (
    <>
      <Button variant="primary" size="lg" active>
        Primary button
      </Button>
      <Button variant="secondary" size="lg" active>
        Button
      </Button>
    </>
  );
}

function DisabledExample() {
  return (
    <>
      <Button variant="primary" size="lg" disabled>
        Primary button
      </Button>
      <Button variant="secondary" size="lg" disabled>
        Button
      </Button>
      <Button href="#" variant="secondary" size="lg" disabled>
        Link
      </Button>
    </>
  );
}
