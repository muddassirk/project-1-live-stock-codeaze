import React from 'react'
import Header from '../Constant/Header'
import NavBar from '../Constant/NavBar'
import ForSaleCard from '../UI/Buyer/ForSaleCard'
import SideBarCard from '../UI/Buyer/SideBarCard'
import SubCard from '../UI/Buyer/SubCard'

const BuyerDashboard = () => {
    return (
        <div>
            <Header />
            <NavBar />
            {/* <div className='d-flex border border-secondary justify-content-center align-items-center text-white' style={{height: '40vh', backgroundColor: "#B11E24"}}>
                <h1 >
                    Welcome to Website
                </h1>
            </div> */}
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                    {/* <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" /> */}
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://timelinecovers.pro/facebook-cover/download/stunning-little-flowers-facebook-cover.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://cdn.pixabay.com/photo/2018/07/17/14/43/banner-3544296__480.jpg" className="d-block w-100" alt="..." />
                    </div>
                    {/* <div className="carousel-item active">
                        <img src="https://timelinecovers.pro/facebook-cover/download/stunning-little-flowers-facebook-cover.jpg" alt="..." />
                    </div> */}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className='container'>
                <div className='row'>
                    <SubCard />
                    <SubCard />
                    <SubCard />
                    <SubCard />
                </div>
            </div>
            <div className="container">
                <div className="row border border-secondary">
                    <div className="col-md-9 border border-secondary">
                        <div className="row">
                            <div className="col-md-6">
                                For sale
                            </div>
                            <div className="col-md-6 text-end">
                                See all
                            </div>
                        </div>
                        {/* <div className="col-md"> */}
                        <div>
                            <ForSaleCard />
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                For sale
                            </div>
                            <div className="col-md-6 text-end">
                                See all
                            </div>
                        </div>
                        {/* <div className="col-md"> */}
                        <div>
                            <ForSaleCard />
                        </div>
                    </div>
                    <div className="col-md-3 border border-secondary">
                        <form className="d-flex py-2">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <div className='sideBarHeading'>
                            <h4 className='px-4'>
                                Verified
                            </h4>
                        </div>
                        <div className="col">   
                            <SideBarCard />
                            <SideBarCard />
                            <SideBarCard />
                        </div>
                        <div className='sideBarHeading'>
                            <h4 className='px-4'>
                                Best
                            </h4>
                        </div>
                        <div className="col">   
                            <SideBarCard />
                            <SideBarCard />
                            <SideBarCard />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyerDashboard
