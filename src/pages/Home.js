import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Header from "../components/Header";

export const Home = () => {
  return (
    <div datatest-id="app">
      <Header />
      <Container>
        <Row>
          <Col md={12}>
            <Card>
              <Card.Body>
                <Card.Title>
                  <h1>Home</h1>
                </Card.Title>
                <Card.Text>
                  Experience global news like never before at Global
                  Perspectives, your trusted source for diverse insights. With
                  expert journalists covering politics, business, and culture,
                  broaden your horizons and deepen your understanding of our
                  interconnected world. Stay informed, gain perspective, and
                  explore the stories that shape our global community.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
