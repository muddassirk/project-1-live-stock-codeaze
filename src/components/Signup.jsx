import React from 'react'
import { Form, Button, Col, Row } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
} from 'react-router-dom'


const Signup = () => {
    return (
        <Router>
            <Form className='my-4'>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <div>
                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="For user" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="For Vender" />
                    </Form.Group> */}
                    <fieldset>
                        <Form.Group as={Row} className="mb-3">
                            <Col sm={10}>
                                <Form.Check
                                    type="radio"
                                    label="User Signup"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Vender Signup"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                />
                            </Col>
                        </Form.Group>
                    </fieldset>
                </div>
                <Button variant="danger" type="submit" className='w-100'>
                    Submit
                </Button>
                <div className='my-2'>
                    Already have account?
                    <Link to='/'>
                        <b> Login</b>
                    </Link>
                </div>
            </Form>

        </Router>
    )
}

export default Signup
