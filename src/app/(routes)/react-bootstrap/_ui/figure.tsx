"use client";

//? REACT BOOTSTRAP
import Figure from "react-bootstrap/Figure";

export function FigureExample() {
  return (
    <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="holder.js/171x180"
        style={{ backgroundColor: 'grey' }}
      />
      <Figure.Caption>
        Nulla vitae elit libero, a pharetra augue mollis interdum.
      </Figure.Caption>
    </Figure>
  );
}