import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

function Producto({ producto }) {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/producto/${producto._id}`}>
        <Card.Img src={producto.image} />
      </Link>

      <Card.Body>   
        <Link to={`/producto/${producto._id}`}>
            <Card.Title as='div'>
                <strong>{producto.name} </strong>
            </Card.Title>
        </Link>

        <Card.Text as="div">
            <div className='my-3'>
                <Rating value={producto.rating} text={`${producto.numReviews} reseñas`} color={'#f8e825'} />
            </div>
        </Card.Text>

        <Card.Text as='h3'>
            $ {producto.price}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Producto
