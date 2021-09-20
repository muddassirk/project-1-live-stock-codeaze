import React from 'react'
import { Form, Button } from 'react-bootstrap'

const Login = () => {
    return (
        <div>
            {/* <h1>
                Login
            </h1> */}
            <Form className='my-4'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <div>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="For user" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="For Vender" />
                    </Form.Group>
                </div>
                <Button variant="danger" type="submit" className='w-100'>
                    Submit
                </Button>
                <div className='my-2'>
                    Don't have any accound yet? <b> Sign Up</b>
                </div>
            </Form>
        </div>
    )
}

export default Login
