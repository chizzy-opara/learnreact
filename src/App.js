import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Name from "./Name";
import Description from "./Description";
import Image from "./Image";
import Price from "./Price";
import Product from "./product"; // Import the Product object
import "./App.css";

const App = () => {
  const firstName = "Chizzy";

  return (
    <>
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand>
              GoMyCode JSX And React Components Checkpoint
            </Navbar.Brand>
          </Container>
        </Navbar>

        <Container>
          <h1 className="mt-5">Product Category</h1>
          <Card style={{ width: "18rem" }}>
            <Image image={Product.image} />
            <Card.Body>
              <Card.Title>
                <Name name={Product.name} />
              </Card.Title>
              <Card.Text>
                <Price price={Product.price} />
                <Description description={Product.description} />
              </Card.Text>
            </Card.Body>
          </Card>
          <p>Hello, {firstName ? firstName : "there!"} 👋</p>
          {firstName && <Image image={Product.image} />}
        </Container>
      </div>
    </>
  );
};

export default App;
