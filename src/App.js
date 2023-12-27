
import Addform from './Addform';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Addtask from './Addtask';
import Header from './Header';


function App() {
  return (
    <div className="App">
      
      <Container>
        <Row className='justify-content-md-center'>
          <Col className='col-6'>
            <Header/>
            <Addform/>
            <Addtask/>
          </Col>
        </Row>
      </Container>
     
    </div>
  );
}

export default App;
