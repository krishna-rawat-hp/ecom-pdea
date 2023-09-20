import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import './index.css';

const ProductCard = ({ id, title, price, description, category, image }) => {
  return (
    <div className="card-container">
       <Card style={{ width: "20rem" }} >
        <Card.Img variant="top" src={image}  height='400px' width='200px'/>
        <Card.Body>
          <Card.Title className='truncated-title'>{title}</Card.Title>
          <Card.Text className='truncated-text'>{description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Price: {price}</ListGroup.Item>
          <ListGroup.Item>Category: {category}</ListGroup.Item>
          <ListGroup.Item>rating: {price}</ListGroup.Item>
        </ListGroup>
        <Card.Body className='card-btn-body'>
          <Button variant='success' className='card-btn'>Add to Cart</Button>
          <Button className='card-btn'>Buy Now</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ProductCard;