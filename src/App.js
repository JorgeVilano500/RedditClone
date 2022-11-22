import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Container, Row, Col } from 'react-bootstrap';
import Navbar from './component/Navbar';


function App() {
  return (
    <Container fluid className='d-flex justify-content-center' >
      <Row>
        <Col>
          <Navbar />
        </Col>
      </Row>
        
        <Row>
          <Col>
          <h1>Hi</h1>
          </Col>
        </Row>
    </Container>
  );
}

export default App;
