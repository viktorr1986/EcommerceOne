import React, { useEffect } from 'react'
import { Link, useParams, useNavigate, useLocation, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import { addToCart, removeFromCart } from '../Actions/cartActions'


function CartScreen() {
    const location = useLocation();
    //const params = useParams()
    const  history  = useNavigate();
    const  { productId } = useParams();
    const qty = location.search ? Number(location.search.split('=')[1]) : 1
    console.log(qty)

    //const match = useParams()
    //const productId = match.id
    //const {id}=useParams()
    //console.log('qty,id => ',qty,id)

      

    const dispatch = useDispatch()

    const cart = useSelector((state) => state.cart)
    const { cartItems, loading, error } = cart
    console.log(cartItems)
    
    
    useEffect(() => {
       if (productId) {       
            dispatch(addToCart(productId, qty))
       } else {
            console.log('Error')
            console.log('productId', productId)
        }
        
    }, [dispatch, productId, qty])

    function Example() {
        useEffect(function () {
            if(productId){
                console.log('entro al render, el id es ', productId )
            }else {
                console.log('no entro el render!')
            }          
        })       
        return console.log("no entro example")
      }
    
      //Example()
      //localStorage.setItem('test', 1);

     /* ...
    useEffect(() => {
        if (productId) {
          dispatch(addToCart(productId, qty)());
        }
      }, [dispatch, productId, qty]);
    
      useEffect(() => {
        if (cartItems) {
          localStorage.setItem("cartItems", JSON.stringify(cartItems));
        }
      }, [cartItems]);

    //state.cartItems.push(action.payload); este codigo por este
    //state.cartItems = [...state.cartItems, action.payload]
 */
      const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
      }

      const checkoutHandler = () => {
        //history.push('/login?redirect=shipping')
        history('/login?redirect=shipping')
      }

    return (
        <Row>
            <Col md={8}>
                <h1>Carrito de Compra</h1>
                {
                    cartItems.lenght === 0 ?
                        (
                            <div class="alert alert-success" role="alert">
                                <h4 class="alert-heading">Carro de Compra</h4>
                                <p>Su carro esta vacio</p>
                                <hr />
                                <p class="mb-0"><link to='/' className='btn btn-light my-3' >Ir Atras</link></p>
                            </div>
                        )
                        :
                        (
                            <ListGroup variant='flush'>
                                {
                                    cartItems.map(item => (
                                        <ListGroup.Item key={item.product}>
                                            <Row>
                                                <Col md={2}>
                                                    <Image src={item.image} alt={item.name} fluid rounded />
                                                </Col>
                                                <Col>
                                                    <link to={`/product/${item.product}`}>{item.name}</link>
                                                </Col>
                                                <Col md={2}>
                                                    $ {item.price}
                                                </Col>
                                                <Col md={3}>
                                                    <Form.Control
                                                        as='select'
                                                        value={item.qty}
                                                        onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
                                                    >
                                                        {
                                                            [...Array(item.countInStock).keys()].map((x) => (
                                                                <option key={x + 1} value={x + 1}>
                                                                    {x + 1}
                                                                </option>
                                                            ))
                                                        }
                                                    </Form.Control>
                                                </Col>
                                                <Col>
                                                    <Button type='button' variant='light'
                                                    onClick={()=> removeFromCartHandler(item.product)}>
                                                        <i className='fas fa-trash'></i>
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    ))
                                }
                            </ListGroup>
                        )

                }
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Total ({cartItems.reduce((acc, item)=> acc + item.qty, 0)}) productos</h2>
                            $ {cartItems.reduce((acc, item)=> acc + item.qty * item.price, 0).toFixed(0)})
                        </ListGroup.Item>
                    </ListGroup>
                    <ListGroup.Item>
                        <Button type='button' className='btn-block'
                        disabled={cartItems.lenght === 0 } onClick={checkoutHandler}>
                            Pagar
                        </Button>
                    </ListGroup.Item>
                </Card>
            </Col>
        </Row>
    )
}

export default CartScreen
