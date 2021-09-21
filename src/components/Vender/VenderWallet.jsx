import React from 'react'
import { Card, ListGroup, Table } from 'react-bootstrap'

const VenderWallet = () => {
    return (
        // <div>
            <div className='thirdColor m-0 p-0'>
            <h1>
                Wallet
            </h1>

            <div className="row mx-auto thirdColor">
                <div className="col-md-3 mt-5">
                    {/* <Card style={{ width: '18rem' }}/> */}
                    <Card className=''>
                        {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
                        <Card.Body>
                            <div className="d-flex justify-content-center align-items-center border border-white rounded secondaryColor" style={{ height: '25vh' }}>
                                <h2 className='text-white'>$2354</h2>
                            </div>
                        </Card.Body>
                        <Card.Body>
                            <h4>Wallet Details</h4>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <div className="row px-3 pt-3">
                                <div className="col-sm-6">
                                    <p>ABc</p>
                                </div>
                                <div className="col-sm-6">
                                    <p>70</p>
                                </div>
                            </div>
                        </ListGroup>
                        <ListGroup className="list-group-flush">
                            <div className="row px-3 pt-3">
                                <div className="col-sm-6">
                                    <p>ABc</p>
                                </div>
                                <div className="col-sm-6">
                                    <p>70</p>
                                </div>
                            </div>
                        </ListGroup>

                    </Card>
                </div>
                <div className="col-md-8 mx-auto px-3">
                    <Table bordered hover className='mt-5 text-center border rounded bg-white'>
                        <thead>
                            <tr className='my-3 border border-dark'>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Pay To</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='my-3'>
                                <td className='py-4'>22-06-2021</td>
                                <td className='py-4'>Mark</td>
                                <td className='text-warning py-4'>Otto</td>
                                <td className='text-warning py-4'>@mdo</td>
                            </tr>
                            <tr className='my-3'>
                                <td className='py-3'>22-06-2021</td>
                                <td className='py-3'>Mark</td>
                                <td className='text-warning py-3'>Otto</td>
                                <td className='text-warning py-3'>@mdo</td>
                            </tr>
                            <tr className='my-3'>
                                <td className='py-3'>22-06-2021</td>
                                <td className='py-3'>Mark</td>
                                <td className='text-warning py-3'>Otto</td>
                                <td className='text-warning py-3'>@mdo</td>
                            </tr>
                            <tr className='my-3'>
                                <td className='py-3'>22-06-2021</td>
                                <td className='py-3'>Mark</td>
                                <td className='text-warning py-3'>Otto</td>
                                <td className='text-warning py-3'>@mdo</td>
                            </tr>
                            <tr className='my-3'>
                                <td className='py-3'>22-06-2021</td>
                                <td className='py-3'>Mark</td>
                                <td className='text-warning py-3'>Otto</td>
                                <td className='text-warning py-3'>@mdo</td>
                            </tr>
                            <tr className='my-3'>
                                <td className='pt-3'>22-06-2021</td>
                                <td className='pt-3'>Mark</td>
                                <td className='text-warning pt-3'>Otto</td>
                                <td className='text-warning pt-3'>@mdo</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default VenderWallet
