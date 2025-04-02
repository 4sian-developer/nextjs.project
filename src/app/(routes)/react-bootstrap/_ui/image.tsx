//? Next.js Built-in
// import Image from "next/image";
//? REACT BOOTSTRAP
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

export function ShapeExample() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="/images/blog/blog-post-1.jpg" rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src="/images/blog/blog-post-1.jpg" roundedCircle />
        </Col>
        <Col xs={6} md={4}>
          <Image src="/images/blog/blog-post-1.jpg" thumbnail />
        </Col>
      </Row>
    </Container>
  );
}

export function FluidExample() {
  return <Image src="holder.js/100px250" fluid />;
}