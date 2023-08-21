import React, {useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
import Rating from '../Componentes/Rating'
//import products from '../productos'
//import axios from 'axios'
import { listProductDetails } from '../Actions/productActions'

function ProductScreen() {

    const dispatch = useDispatch()
    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails

    const { id } = useParams();
    //const [product, setProduct] = useState([])
    
    useEffect(()=> {

        dispatch(listProductDetails(id))

        //async function fetchProduct(){
            //const { data } = await axios.get(`/api/products/${id}`)
            //setProduct(data)
        //}
        //fetchProduct()
    }, [])

      //const { id } = useParams();
    //const product = products.find((p) => String(p._id) === id);

   // const product = products.find((p) => p._id == match.params.id)
  return (
    <div>
      <Link to='/' className='btn btn-light my-3' >Ir Atras</Link>

      {
        loading ? <div class="text-center">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Cargando...</span>
                    </div>
                  </div>
        : error ? <h3>{error}</h3>
        : (
            <Row>
            <Col md={6}>
                <Image src={product.image} alt={product.name} fluid></Image>
            </Col>
    
            <Col md={3}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating value={product.rating} text={`${product.numReviews} reseñas`} color={'#f8e825'} ></Rating>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Precio: $ {product.price}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Descripcion: {product.description}
                    </ListGroup.Item>
                </ListGroup>
            </Col>
    
            <Col md={3}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <Row>
                                <Col>Precio</Col>
                                <Col><strong>$ {product.price}</strong> </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Estado</Col>
                                <Col>
                                    {product.countInStock > 0 ? 'En Stock' : 'Agotado'}
                                </Col>
                            </Row>
                        </ListGroup.Item>
    
                        <ListGroup.Item>
                            <Button className='btn-block' disabled={product.countInStock === 0} type='button'>Agregar a la Cesta</Button>
                        </ListGroup.Item>
    
                    </ListGroup>
                </Card>
            </Col>
          </Row>
          )
      }




    </div>
  )
}

export default ProductScreen
