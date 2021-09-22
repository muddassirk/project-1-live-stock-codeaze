import React from 'react'
import { Table } from 'react-bootstrap'
// import CustomDateRangePickerDay from '../UI/Vender/CustomDateRangePickerDay'
// import DateRangePicker from '../UI/Vender/DateRangePicker'

const VenderDashboard = () => {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <div className="row text-center">
                        <div className="col-md-4 border border-dark p-3 border-left-">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h2>$232</h2>
                                    <small>Sales</small>
                                </div>
                                <div className="col-sm-6">
                                    <small>icon</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 border border-dark p-3 ">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h2>$232</h2>
                                    <small>Earnings</small>
                                </div>
                                <div className="col-sm-6">
                                    <small>icon</small>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4 border border-dark p-3 border-right-">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h2>$0</h2>
                                    <small>Page View</small>
                                </div>
                                <div className="col-sm-6">
                                    <small>icon</small>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid mt-3">
                <div className="row">
                    <div className="col-lg-4 col-md-5 " >
                        <div className="card px-3">
                            <h3 className='py-3'>
                                Orders
                            </h3>
                            <Table >
                                <tbody>
                                    <tr>
                                        <td>Total</td>
                                        <td>230</td>
                                    </tr>
                                    <tr>
                                        <td>completed</td>
                                        <td>200</td>
                                    </tr>
                                    <tr>
                                        <td>pending</td>
                                        <td>30</td>
                                    </tr>
                                    <tr>
                                        <td>processing</td>
                                        <td>30</td>
                                    </tr>
                                    <tr>
                                        <td>comcelled</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>Refuned</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>On-Hold</td>
                                        <td>0</td>
                                    </tr>

                                </tbody>
                            </Table>

                        </div>
                        <div className="card">
                            <h3 className='py-3'>
                                For Calender
                                {/* <DateRangePicker /> */}
                                {/* <CustomDateRangePickerDay /> */}
                            </h3>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-7">
                        <div className="card">
                            <div className="px-3">

                                <h2 className='py-3'>Products Descriptions</h2>
                                <div className="py-2">

                                    <Table  bordered hover >
                                        <tbody >
                                            <tr >
                                                <td className='px-4'>Total</td>
                                                <td className='text-end px-4'>230</td>
                                            </tr>
                                            <tr>
                                                <td className='px-4'>Live</td>
                                                <td className='text-end px-4'>200</td>
                                            </tr>
                                            <tr>
                                                <td className='px-4'>Offline</td>
                                                <td className='text-end px-4'>0</td>
                                            </tr>
                                            <tr>
                                                <td className='px-4'>Deleted</td>
                                                <td className='text-end px-4'>0</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VenderDashboard
