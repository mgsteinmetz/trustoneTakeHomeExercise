import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Container, Row, Col, Button, Card } from 'react-bootstrap';

function App() {
  const handleSearch = (e)=> {
    e.preventDefault();
    setLoading(true);
    fetch(`https://arcgis.metc.state.mn.us/server/rest/services/GISLibrary/VWParcelsPoints/FeatureServer/0/query?where=COUNTY_PIN%3D'${countyPin}'+OR+ANUMBER%3D${streetNum}+OR+ST_NAME%3D'${streetName}'+OR+ST_POS_TYP%3D'${streetType}'&outFields=OWNER_NAME,ANUMBER,ST_PRE_MOD,ST_PRE_DIR,ST_PRE_TYP,ST_PRE_SEP,ST_NAME,ST_POS_TYP,ST_POS_DIR,ST_POS_MOD,CTU_NAME,STATE_CODE,ZIP,CO_NAME,SALE_VALUE&returnGeometry=false&f=pjson`)
    .then((res) => res.json())
    .then((json) => {
      setItems(json);
    });
    setLoading(false);
  };

  const [ loading, setLoading ] = useState(false);

  const [ items, setItems ] = useState({});
  
  const [ countyPin, setCountyPin ] = useState('');

  const [ streetNum, setStreetNum ] = useState('');

  const [ streetName, setStreetName ] = useState('');

  const [ streetType, setStreetType ] = useState('');

  const {OWNER_NAME, ANUMBER, ST_PRE_MOD, ST_PRE_DIR, ST_PRE_TYP, ST_PRE_SEP, ST_NAME, ST_POS_TYP, ST_POS_DIR, ST_POS_MOD, CTU_NAME, STATE_CODE, ZIP, CO_NAME, SALE_VALUE} = items?.features?.[0]?.attributes || {};

  const dollarSign = '$';

  const county = 'County';

  const comma = ',';

  if (loading) return 
  <div>
      <h1> Please wait, for content is loading...</h1>
  </div>;
  return (
    <main className="flex-row justify-center mb-4 p-5 text-center">
      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <Card className="card col-md-6">
              <h4 className="card-header bg-dark text-light p-2 text-center">Search For A Property</h4>
              <Card.Body className="card-body">
                  <Form>
                    <Form.Group>
                      <Form.Label>Please Enter County PIN, Street Number, or Street Name</Form.Label>
                      <Form.Control
                        onChange={ e => {setCountyPin(e.target.value); setStreetNum(e.target.value); setStreetName(e.target.value);  setStreetType(e.target.value)} }
                        className="form-input"
                        placeholder="enter county PIN#"
                        name="pin"
                        type="pin"
                      />
                    </Form.Group>
                    <Button onClick={handleSearch} className="btn btn-block btn-primary m-3 text-center" style={{ cursor: 'pointer' }} type="submit">
                      Search
                    </Button>
                  </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Card className='App card p-2 m-5 text-center'>
        <Card.Body className='card-body '>
            <Card.Text>{OWNER_NAME}</Card.Text>
            <Card.Text>{ANUMBER} {ST_PRE_MOD} {ST_PRE_DIR} {ST_PRE_TYP} {ST_PRE_SEP} {ST_NAME} {ST_POS_TYP} {ST_POS_DIR}{comma} {ST_POS_MOD} {CTU_NAME}{comma} {STATE_CODE} {ZIP}</Card.Text>
            <Card.Text>{CO_NAME} {county}</Card.Text>
            <Card.Text>{dollarSign} {SALE_VALUE}</Card.Text>
        </Card.Body>
      </Card>
    </main>
  );
};


export default App;