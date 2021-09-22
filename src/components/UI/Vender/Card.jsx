import React from 'react'
import { Form, Button, Col, Row } from 'react-bootstrap'
import dummy from '../../../assets/download.png'

const Card = () => {
    return (
        <div className='card w-50 mx-auto mb-3'>
            <div className="main-card ">
                <div className="d-flex justify-content-center mt-3">
                    <img src={dummy} className="card-img-top w-25" alt="..." />
                </div>
                <div className="card-body mt-2">
                    <Form className='px-5 text-center'>
                        <Form.Group as={Row} className="mb-3 formInput" controlId="formPlaintextName">
                            <Form.Label column sm="4">
                                Name
                            </Form.Label>
                            <Col sm="8">
                                <Form.Control plaintext readOnly defaultValue="Fayaz Khan" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3 formInput" controlId="formPlaintextUserName">
                            <Form.Label column sm="4">
                                User Name
                            </Form.Label>
                            <Col sm="8">
                                <Form.Control plaintext readOnly defaultValue="FayazKhan" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3 formInput" controlId="formPlaintextEmail">
                            <Form.Label column sm="4">
                                Email
                            </Form.Label>
                            <Col sm="8">
                                <Form.Control plaintext readOnly defaultValue="email@example.com" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3 formInput" controlId="formPlaintextPhoneNo">
                            <Form.Label column sm="4">
                                Phone No
                            </Form.Label>
                            <Col sm="8">
                                <Form.Control plaintext readOnly defaultValue="0333333333" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3 formInput" controlId="formPlaintextPassword">
                            <Form.Label column sm="4">
                                Password
                            </Form.Label>
                            <Col sm="8">
                                <Form.Control plaintext readOnly defaultValue="***********" />
                                {/* <Form.Control type="password" placeholder="Password" /> */}
                            </Col>
                        </Form.Group>

                    </Form>
                </div>
            </div>
            <Button className='mt-3 btn-save'>
                Save
            </Button>
        </div>
    )
}

export default Card
