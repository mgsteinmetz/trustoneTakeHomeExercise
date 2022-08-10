import React, { Component, useState } from 'react';
import ReactDOM, { render } from 'react-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Container, Row, Col, Button, Card, FormGroup } from 'react-bootstrap';

class County extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  };

  componentDidMount() {
    fetch('https://arcgis.metc.state.mn.us/server/rest/services/GISLibrary/VWParcelsPoints/FeatureServer/0')
    .then((res) => res.json())
    .then((json) => {
      this.setState({
        items: json,
        DataisLoaded: true,
      });
    });
  };

  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return 
    <div>
        <h1> Please wait, for content is loading...</h1>
    </div>;
    
    return (
      <div className='App'>
        <h1> Fetching data...??</h1> {
          items.map((item) => (
            <ol key = {item.id }>
              Owner: { item.owner },
              Address: { item.address },
              County: { item.county },
              Market_Value: { item.value },
            </ol>
          ))
        }
      </div>
    )
  };
};

const CountyForm = (props) => {
  // const [formState, setFormState] = useState({ countyPin: ''});

  // update the state when the form input changes
  // const handleChange = (event) => {
  //   const { name, value } = event.target;

  //   setFormState({
  //     ...formState,
  //     [name]: value,
  //   });
  // };

  // returning properties when county is searched

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();
  //   console.log(formState);
  //   try {
  //     const { data } = await login({
  //       variables: { ...formState },
  //     });
  
  //     console.log(data);
  //     Auth.login(data.login.token);
  
  
  //   } catch (e) {
  //     console.log("THIS ERROR J-HERE");
  //     console.error(e);
  //   }
  
  //   // clear form values
  
    // setFormState({
    //   countyPin: '',
    // });

    return (
      <main className="flex-row justify-center mb-4 p-5 text-center">
        <Container>
          <Row>
        <Col className="d-flex justify-content-center">
          <Card className="card col-md-6">
            <h4 className="card-header bg-dark text-light p-2 text-center">Search For Your County</h4>
            <Card.Body className="card-body">
                <Form>
                  <Form.Group>
                    <Form.Label>Please Enter a County PIN</Form.Label>
                    <Form.Control
                      className="form-input"
                      placeholder="enter county PIN#"
                      name="pin"
                      type="pin"
                    />
                  </Form.Group>
                  <Button className="btn btn-block btn-primary m-3 text-center" style={{ cursor: 'pointer' }} type="submit">
                    Search
                  </Button>
                </Form>
  
              {/* {error && (
                <div className="my-3 p-3 bg-danger text-white">
                  {error.message}
                </div>
              )} */}
            </Card.Body>
          </Card>
        </Col>
        </Row>
        </Container>
      </main>
    );
  };


export default CountyForm;