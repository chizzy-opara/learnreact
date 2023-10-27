// Bootstrap CSS to apply the styles
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const App = () => {
  return (
    <>
      <div className="App">
        {/* Bootstrap Navbar component */}
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand>GOMYCODE REACT JS CHECKPOINT</Navbar.Brand>
          </Container>
        </Navbar>

        <Container>
          {/* Heading using an h1 element */}
          <h1 className="mt-5">Welcome to My React App</h1>

          <Row className="mt-4">
            {/* A Row to contain three Col components */}
            <Col>
              {/* Bootstrap Card component for the card 1*/}
              <Card>
                <Card.Body>
                  <Card.Title>Card 1</Card.Title>
                  <Card.Text>This is the first card.</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              {/* Bootstrap Card component for the card 2*/}
              <Card>
                <Card.Body>
                  <Card.Title>Card 2</Card.Title>
                  <Card.Text>This is the second card.</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              {/* Bootstrap Card component for the card 3*/}
              <Card>
                <Card.Body>
                  <Card.Title>Card 3</Card.Title>
                  <Card.Text>This is the third card.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default App;
