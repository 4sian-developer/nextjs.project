"use client";

//? REACT BOOTSTRAP
import Breadcrumb from "react-bootstrap/Breadcrumb";

export function BreadcrumbExample() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="#">
        Library
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
  );
}
