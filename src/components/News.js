import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './common/Header';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export const News = () => {
  const [news, setNews] = useState([]);
  const location = useLocation();
  const category = new URLSearchParams(location.search).get('category');
  const apiKey = 'pub_22243b7cbe37145aae55912a7c066705365fa';
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch(
        `https://newsdata.io/api/1/news?apikey=${apiKey}&q=${category}&language=en`
      );
      const data = await response.json();

      const articles = data.results
        .filter(
          (article) => article.image_url && article.language === 'english'
        ) // Filter articles with image_url present and language is "english"
        .map((article) => {
          return (
            <Col key={article.link} xs={12} sm={6} md={3}>
              <Card className="mb-3">
                <Card.Img variant="top" src={article.image_url} />
                <Card.Body>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Text>{article.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button href={article.link}>Read More</Button>
                </Card.Footer>
              </Card>
            </Col>
          );
        });

      setNews(articles);
    };

    fetchNews();
  }, [category]);

  return (
    <div>
      <Header />

      <Container>
        <h1>{categoryName}</h1>
        <Row className="mt-3">{news}</Row>
      </Container>
    </div>
  );
};
