import React, {useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams, useHistory, useNavigate } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card, Form, FormControl } from 'react-bootstrap'
import Rating from '../Componentes/Rating'
//import products from '../productos'
//import axios from 'axios'
import { listProductDetails } from '../Actions/productActions'


function ProductScreen() {

    const [qty, setQty] = useState(1)

    const dispatch = useDispatch()
    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails

    const { id } = useParams();
    //const { history } = useHistory();
    const  history  = useNavigate();
    //const [product, setProduct] = useState([])
    
    const addToCartHandler = () => {
        //console.log('Adicionado', id)
        history(`/cart/${id}?qty=${qty}`)  
    }
    
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

                        {
                            product.countInStock > 0 && 
                            (
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Cantidad</Col>
                                        <Col xs='auto' className='my-1'>
                                            <Form.Control
                                                as='select'
                                                value={qty}
                                                onChange={(e) => setQty(e.target.value)}
                                            >
                                                {
                                                    [...Array(product.countInStock).keys()].map((x) => (
                                                        <option key={x + 1} value={x + 1}>
                                                            {x + 1}
                                                        </option>
                                                    ))
                                                }
                                            </Form.Control>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            )
                        }
    
                        <ListGroup.Item>
                            <Button 
                                onClick={addToCartHandler}
                                className='btn-block' disabled={product.countInStock === 0} type='button'>Agregar a la Cesta</Button>
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
