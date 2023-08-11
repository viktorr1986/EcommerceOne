import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
//import productos from '../productos'
import Producto from '../Componentes/Producto.js'
import axios from 'axios'

function HomeScreen() {

    const [productos, setProductos] = useState([])
    
    useEffect(()=> {
        async function fetchProductos(){
            const { data } = await axios.get('/api/products/')
            setProductos(data)
        }
        fetchProductos()
    }, [])

  return (
    <div>
        <h1>nuestro delicioso menu</h1>
        <Row>
            {
                productos.map(producto => (
                    <Col key={producto._id} sm={12} md={6} lg={4} xl={3} >
                        <Producto producto={producto} />
                    </Col>
                ))
            }
        </Row>
    </div>
  )
}

export default HomeScreen
