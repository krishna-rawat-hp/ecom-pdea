import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './index.css';

const CardComponent = ({product}) => {

    const {id, title, price, description, category, image} = product;

  return (
    <div className="card-container">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Price: {price}</ListGroup.Item>
          <ListGroup.Item>Category: {category}</ListGroup.Item>
          <ListGroup.Item>rating: {price}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Button>Add to Cart</Card.Button>
          <Card.Button>Buy Now</Card.Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardComponent;
