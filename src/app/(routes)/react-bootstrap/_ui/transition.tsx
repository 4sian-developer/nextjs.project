"use client";

//? REACT Built-in
import { useState } from "react";
//? REACT BOOTSTRAP
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import Card from "react-bootstrap/Card";
import Fade from "react-bootstrap/Fade";

export function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        click
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Collapse>
    </>
  );
}

export function HorizontalExample() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        click
      </Button>
      <div style={{ minHeight: '150px' }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            <Card body style={{ width: '400px' }}>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </Card>
          </div>
        </Collapse>
      </div>
    </>
  );
}

export function FadeExample() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-fade-text"
        aria-expanded={open}
        style={{ marginBottom: ' 1rem' }}
      >
        Toggle text (Fade)
      </Button>
      <Fade in={open}>
        <div style={{ marginBottom: ' 1rem' }} id="example-fade-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Fade>
    </>
  );
}