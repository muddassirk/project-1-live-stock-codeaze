import React from 'react'

const VenderUpdateBidding = () => {
    return (
        <div>
            <div className="card">
                <div className="container">

                    <div className="row mx-4 my-5">
                        <div className="col-sm-6">
                            <p>
                                Product Details
                            </p>
                        </div>
                        <div className="col-sm-6 text-end">
                            <button className='btn btn-danger w-75'>
                                Delete Product
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card-body">

                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Title
                                        </label>
                                    </div>
                                </th>
                                <th scope="col">Image</th>
                                <th scope="col">Status</th>
                                <th scope="col">Color</th>
                                <th scope="col">Price</th>
                                <th scope="col">Earning</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Title
                                        </label>
                                    </div>
                                </th>
                                <td>
                                    <img className='w-25' src="https://dummyimage.com/250/ffffff/000000" alt="" />
                                </td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>$34</td>
                                <td>$25</td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Title
                                        </label>
                                    </div>
                                </th>
                                <img className='w-25' src="https://dummyimage.com/250/ffffff/000000" alt="" />
                                {/* <td>Jacob</td> */}
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>$34</td>
                                <td>$25</td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Title
                                        </label>
                                    </div>
                                </th>
                                <img className='w-25' src="https://dummyimage.com/250/ffffff/000000" alt="" />
                                {/* <td>@twitter</td> */}
                                <td>@twitter</td>
                                <td>@twitter</td>
                                <td>$34</td>
                                <td>$25</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default VenderUpdateBidding
