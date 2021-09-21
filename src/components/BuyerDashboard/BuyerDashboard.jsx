import React from 'react'
import Header from '../Constant/Header'
import NavBar from '../Constant/NavBar'
import ForSaleCard from '../UI/Buyer/ForSaleCard'
import SideBarCard from '../UI/Buyer/SideBarCard'
import SubCard from '../UI/Buyer/SubCard'
import Carousel from '../Constant/Carousel'

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
                <Carousel />
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
