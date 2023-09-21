// Import React and the required Bootstrap components for a card.
import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import './index.css';

//Define a functional component named ProductCard that accepts the following props: id, title, price, description, category, and image. 
const ProductCard = ({ id, title, price, description, category, image }) => {
  return (
    // Render a div element with the class name "card-container."
    <div className="card-container">
      {/* Create a Card component with a width of "20rem." */}
       <Card style={{ width: "20rem" }} >
        {/* Inside the Card component, include an Card.Img component that displays an image using the src prop and sets the height and width using height='400px' and width='200px'. */}
        <Card.Img variant="top" src={image}  height='400px' width='200px'/>
        {/* Within the Card.Body, display the product title and description using Card.Title and Card.Text, respectively. */}
        <Card.Body>
          <Card.Title className='truncated-title'>{title}</Card.Title>
          <Card.Text className='truncated-text'>{description}</Card.Text>
        </Card.Body>
        {/* Create a ListGroup component with the class name "list-group-flush." */}
        <ListGroup className="list-group-flush">
          {/* Inside the ListGroup, display the product price, category, and rating using ListGroup.Item components. */}
          <ListGroup.Item>Price: {price}</ListGroup.Item>
          <ListGroup.Item>Category: {category}</ListGroup.Item>
          <ListGroup.Item>rating: {price}</ListGroup.Item>
        </ListGroup>
        {/* Add a Card.Body with the class name "card-btn-body." */}
        <Card.Body className='card-btn-body'>
          {/* include two buttons: one with the variant 'success' and the text "Add to Cart," and the other with no variant and the text "Buy Now." */}
          <Button variant='success' className='card-btn'>Add to Cart</Button>
          <Button className='card-btn'>Buy Now</Button>
        </Card.Body>
      </Card>
    </div>
  )
}
// export the ProductCard component as the default export of the module.
export default ProductCard;