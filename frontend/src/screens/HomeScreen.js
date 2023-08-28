import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
//import productos from '../productos'
import Producto from '../Componentes/Producto.js'
//import axios from 'axios'
import { listProducts } from '../Actions/productActions.js'

function HomeScreen() {

    // const [productos, setProductos] = useState([])
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { error, loading, products } = productList

    useEffect(() => {
        //async function fetchProductos() {
        //const { data } = await axios.get('/api/products/')
        //setProductos(data)
        //}
        //fetchProductos()

        dispatch(listProducts())

    }, [dispatch])  // se le agrega match

    return (
        <div>
            <h1>nuestro delicioso menu</h1>
            {
                loading ? <div class="text-center">
                            <div class="spinner-border" role="status">
                                <span class="visually-hidden">Cargando...</span>
                            </div>
                          </div>
                    : error ? <h3>{error}</h3>
                        : <Row>
                            {
                                products.map(producto => (
                                    <Col key={producto._id} sm={12} md={6} lg={4} xl={3} >
                                        <Producto producto={producto} />
                                    </Col>
                                ))
                            }
                        </Row>
            }

        </div>
    )
}

export default HomeScreen
