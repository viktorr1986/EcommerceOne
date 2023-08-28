import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './Componentes/Headers'
import Footer from './Componentes/Footer'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

function App() {
  return (
    <Router>
      <Header />
      <main className='p-3'>
        <Container>        
          <Routes>
            <Route path='/' Component={HomeScreen} exact />
            <Route path='/producto/:id' Component={ProductScreen} exact />
            <Route path='/cart/:id?' Component={CartScreen} exact />
          </Routes>      
        </Container>
      </main>
      <Footer />
    </Router>
  );  
}

export default App;
