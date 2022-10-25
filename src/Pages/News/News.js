import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";

const News = () => {
  const news = useLoaderData();

  const { total_view, thumbnail_url, title, details, rating, image_url } = news;

  return (
    <Card className="mb-5">
      <Card.Body>
        <Card.Img variant="top" src={image_url} />
        <Card.Title className="my-3">{title}</Card.Title>
        <Card.Text>
          <p>{details}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default News;
