import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Container, Row, Col, Button, Card } from "react-bootstrap";
import SearchResult from "./SearchResult";
function App() {
  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    let baseUrl = 'https://arcgis.metc.state.mn.us/server/rest/services/GISLibrary/VWParcelsPoints/FeatureServer/0/query?where=';
    if (countyPin !== '') {
      baseUrl+=`COUNTY_PIN%3D'${countyPin}'`;
    } 
    if (streetNum !== '') {
      if (countyPin !== '') {
        baseUrl+=`+AND+`
      }
      baseUrl+=`ANUMBER%3D${streetNum}`;
    } 
    if (streetName !== '') {
      if (countyPin !== '' || streetNum !== '') {
        baseUrl+= `+AND+`
      }
      baseUrl+=`ST_NAME%3D'${streetName}'`;
    }
    baseUrl+=`&outFields=OWNER_NAME,ANUMBER,ST_PRE_MOD,ST_PRE_DIR,ST_PRE_TYP,ST_PRE_SEP,ST_NAME,ST_POS_TYP,ST_POS_DIR,ST_POS_MOD,CTU_NAME,STATE_CODE,ZIP,CO_NAME,SALE_VALUE&returnGeometry=false&f=pjson`
    fetch( baseUrl )
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
      });
    setLoading(false);
  };

  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState({});
  const [countyPin, setCountyPin] = useState("");
  const [streetNum, setStreetNum] = useState("");
  const [streetName, setStreetName] = useState("");

  if (loading) return (
    <div>
      <h1> Please wait, for content is loading...</h1>
    </div>
  )

  return (
    <main className="flex-row justify-center mb-4 p-5 text-center">
      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <Card className="card col-md-6">
              <h4 className="card-header bg-dark text-light p-2 text-center">
                Search For A Property
              </h4>
              <Card.Body className="card-body">
                <Form>
                  <Form.Group>
                    <Form.Label>
                      Please Enter County PIN, Street Number, or Street Name
                    </Form.Label>
                    <Form.Control
                      onChange={(e) => {
                        setCountyPin(e.target.value);
                      }}
                      className="form-input"
                      placeholder="enter county PIN#"
                      name="pin"
                      type="pin"
                    />
                    <Form.Control
                      onChange={(e) => {
                          setStreetNum(e.target.value);
                        }}
                        className="form-input"
                        placeholder="enter street #"
                        name="number"
                        type="number"
                    />
                    <Form.Control
                      onChange={(e) => {
                          setStreetName(e.target.value);
                        }}
                        className="form-input"
                        placeholder="enter street name"
                        name="name"
                        type="name"
                    />
                  </Form.Group>
                  <Button
                    onClick={handleSearch}
                    className="btn btn-block btn-primary m-3 text-center"
                    style={{ cursor: "pointer" }}
                    type="submit"
                  >
                    Search
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container> 
      {items?.features?.map(result => <SearchResult result = {result}/>)}
      {items.features !== undefined && items.features.length === 0 && (
        <div>
          <h1>
            No Results
          </h1>
        </div>
      )}
    </main>
  );
}

export default App;