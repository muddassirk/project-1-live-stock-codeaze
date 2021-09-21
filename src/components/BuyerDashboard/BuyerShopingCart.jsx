import React from 'react'
import Header from '../Constant/Header'
import NavBar from '../Constant/NavBar'
import Carousel from '../Constant/Carousel'
import SideBarCard from '../UI/Buyer/SideBarCard'

const BuyerShopingCart = () => {
    return (
        <div>
            <Header />
            <NavBar />
            <Carousel />
            <div className="container my-4">
                <div className="row">
                    <div className="col-md-8 my-4">
                        <div className="text-start py-4">
                            <h1>
                                Shoping Cart
                            </h1>
                        </div>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Product</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="card mb-3">
                                            <div className="row g-0">
                                                <div className="col-md-6">
                                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEXMzMwAAADR0dHPz8/T09OAgIBdXV13d3dycnLExMSJiYlra2vAwMCXl5dgYGCPj4+xsbFHR0ebm5shISGzs7NTU1OpqalmZmY3NzegoKApKSl9fX1YWFhNTU2Li4syMjIWFhZCQkIODg6998ELAAADoElEQVR4nO3Y2ZqqOhCAUSopBAVEHNsZff+HPGGeen/dF2fjvvjXTRs6hlSGCuh5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+JdY06muGHVsr8Kg+Ee9dmz3RdOrUBR/0dD/zG6ufmNVXNBlEmVZdNa6gu6vh+y0/TFG43c2rrLV43Xxuvlx3ZC1ySm7t8X52ONtUVlnUpTX8hUk6Um+qv/rVQ5pEshl+UOIuq7bWZzkYVy7IotV4j8lLWOycS7BNs1kNX+I2ng+iiUVLdWtM/V2WdEV9WXjyqpZ/lNDbTtHce3YJNGyoVQ25djIrSi7f6bmp5b+EpPk5a3r+9u97F3PlrKtxtyK/8uemfe2qGnr6no/uBY03FXt6EPm34p1x+RshmU32MbPm/TzyNue2a6P06jN6qLDshRlSZqG2k8zM/6wY57ZrYynWdBcjSWuA7PpsemjhstJS3IeTJLZugjtpp05Pd1m34mVUceKObVubW6bYOy7nQVf9tVHXUs8amY6Ur5bn24FNFdN+v5IhGa1G97X5cJiesrNWNKvVTtzqypEXcg0w45HSp+BW+3BoWnelolofm6yRh17rbVINHEbYRa2PXMhbsy3AZp0PFKbogmNFtpdmK7sv89tFjO+sCwOsV6E96jrexGiW6LTGdT36DAwl+Jruli3Ee4nK3sO5jk8C1xoZU//MIdliLdvArRnGV7QKC//nD48h25cB3e13ruesG/3YVl8yXGaMdwwDC66gSiHyIQf3oe6HmRw610OzTnf5g2b988xXeRtRu19sbeqy1pJXadMqBWTyCdyqRx7HXMB3psHkq+giWLZTWeVRat0M2Cuz37vXYD1yekmrl0L0WH+CN2wDgLMD03Pu9PN1emqVElmGqLJ0+Fe7RZy+8Sk8ph/leqrlyZNLG3eK5ZdPQu6a59uvCaLjkOsz9CmVtBbxnqqZ1e3o1w0i2X9+F8wG7mWLwXVe6zrZqzWvcueuo51x0Rx9PdmX6Osd6Cs37F2L9ZLCd3rr9VY/A8s0lW3910uf/pBKSyfAVxo4fmY7nqh2GN3hGwHLfUeqvUu4bVuqJhYs5dnej5HEn0gz5i065jdh0FYS8o49Li47LKHN9ip3310D+dRt0iN37ZTXbWe/9o9T5vPPJT2NpMd/9pSvSL/Ljn0a01+/hn//gMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIB/zH/2yB/6TpcZzgAAAABJRU5ErkJggg==" className="img-fluid rounded-start" alt="..." />
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="card-body">
                                                        <h5 className="card-title">Goat Product</h5>
                                                        <p>Color: White and Black</p>
                                                        <p>Size: X5</p>
                                                        <p>Product code: 18562</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><input type="number" /> </td>
                                    <td>$40</td>
                                    <td>$70</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-4 my-4">

                        {/* <div className="card" style={{ width: '18rem' }}> */}
                        <div className="card card-margin">
                            <div className="card-body ">
                                <h3 className="card-title">Order Summary</h3>
                                <hr />
                                <div className="row py-3 px-4">
                                    <div className="col-sm-6">
                                        <h6 className='fw-bold'>ITEMS 2</h6>
                                    </div>
                                    <div className="col-sm-6 text-end">
                                        $70.00
                                    </div>
                                </div>
                                <div className='py-2 px-4'>
                                    <h6 className='fw-bold'>SHIPPING</h6>
                                </div>
                                <div className="btn-group py-3 w-100">
                                    <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        Right-aligned menu example
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <li><button className="dropdown-item" type="button">Action</button></li>
                                        <li><button className="dropdown-item" type="button">Another action</button></li>
                                        <li><button className="dropdown-item" type="button">Something else here</button></li>
                                    </ul>
                                </div>
                                <hr />
                                <div className="row py-3 px-4">
                                    <div className="col-sm-6">
                                        <h6 className='fw-bold'>ITEMS 2</h6>
                                    </div>
                                    <div className="col-sm-6 text-end">
                                        $70.00
                                    </div>
                                </div>
                                <div className='w-50 mx-auto'>
                                    <button className='btn btn-danger w-100'>
                                        Total Cost
                                    </button>
                                </div>
                                <div className="row py-4 px-4">
                                    <div className="col-sm-6 ">
                                        <h6 className='fw-bold'>Promotion Code</h6>
                                    </div>
                                    <div className="col-sm-6 text-end">
                                        +
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyerShopingCart
