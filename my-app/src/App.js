import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Container, Row, Col, Button, Card, FormGroup } from 'react-bootstrap';


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
      <main className="flex-row justify-center mb-4">
        <Container>
          <Row>
        <Col className="d-flex justify-content-center">
          <Card className="card col-md-6">
            <h4 className="card-header bg-dark text-light p-2">Search County</h4>
            <Card.Body className="card-body">
                <Form>
                  <Form.Group>
                    <Form.Label>County Pin</Form.Label>
                    <Form.Control
                      className="form-input"
                      placeholder="Enter County pin #"
                      name="pin"
                      type="pin"
                    />
                  </Form.Group>
                  <Button
                    className="btn btn-block btn-primary"
                    style={{ cursor: 'pointer' }}
                    type="submit"
                  >
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