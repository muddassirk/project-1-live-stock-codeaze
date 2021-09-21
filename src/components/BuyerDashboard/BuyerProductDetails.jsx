import React from 'react'
import Header from '../Constant/Header'
import NavBar from '../Constant/NavBar'
import Carousel from '../Constant/Carousel'

const BuyerProductDetails = () => {
    return (
        <div>
            <Header />
            <NavBar />
            <Carousel />
            <div className='container mt-5'>
                <div className='col-sm-12'>
                    {/* <div className="card mb-3" style={{ maxWidth: '540px' }}> */}
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-6">
                                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFRUYGBUYGBUYGBoaGBgYGBgYGBgZGRgVGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHjQkJCU0NDQ0MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAIFBgABB//EADgQAAEDAwIDBQcDAwQDAAAAAAEAAhEDBCESMQVBURMiYXHwBhQygZGhwUKx0VLh8QcVI2JystL/xAAaAQADAQEBAQAAAAAAAAAAAAABAgMABAUG/8QAJhEAAgIBBAICAgMBAAAAAAAAAAECESEDEjFBE1EiMgRxFGGBI//aAAwDAQACEQMRAD8A+NQpCmUZrQEVrxKVy9C2CbamJQ3MhPOrTgBQdSlIpPsLEl5KPWbGyXKosmQZhTTXQEi2VMvStCSjYV5lesagh6LTeg1gVppDzKIXrrUDK6k8BENYKDcrwKrK55go9B0ormAo1JgCaUlQbwTp0UfRCix4CDXulH5NmSYxT3RiwEJGlcSU7TclkmjN0DNv4IVWj4Jw1Qu1ApU5AQg2j4L1zQE48BKmkSnyGrA6fBQqNCbbTjdDqUZRUsjpUIaZRBagowtlPQU7n6YGxQ2wUW0AmnL0MCO9iir6YCUe4ynHjKFWYni/ZRLAJjkYU0BroTVOqEZX0CgQR2UQ5elgKnTdpSOXopFLsj7kVyZ9+C5JumNtgUOkqdKmSUSjlM0mwcrpcqI7s0Sp2ym+keStLOhrhWDuHABS3orGNqzJGj1CD2BJWhurUKNGxnZMpoO3BUe7ABAfbnotC3hzzyAU6tlAyt5EhdrMtoRKdEq6/wBuk4Er11hp3QesuAOLKsUyvC0q5FqOiPb2AdyU/KgbLKCmxxPNWNG0dC0ttwUcgmavDdI2Sy1L4KLSRknW7ghPtSVb3AIdBUGsnkipCyjTwUzLZwKtKLMK54ZwKrXaTRZrc3dgPeA5EzgTmJOYRL72YvKcA29V2oY0Mc/kDB0gwf4RalJXRCSM49hlTAIVj/s9yA5xtrgBvxE0agA85aqq4qEYII6SCP3WUX6Dyc6qjUqgSZKGKhBRcbGSLYQVzoCFbOkKVRQkshYs94XCoOajUplLvYUySYu2zy4rCUF1eFN1uTlL1mQrRUeApBWvlQq5QqVREc9NtphFnjKPQCk1mpFZShGUsUGKJtaVF6dpMUbihiQoqWSrhgr9C5Shcq2JRGgwASVE1JKnV2SIflMleSe3JobG60QrF3FQcALNdrhFp1jCk4djRk0i2dcSU7Ru2Nbkws+wkqVeiY3K1J4Yymy7fxhmcykq3Eg4qifScvKQIKbwx9hc2zZcOqN0nqh3tcEgDks/TuXDqnKL5UJaVOxt1qhrtVY8PflVJYmLWtBStYAsM3XDoIVi+gHBZWyvojKvbO91c1osshW74K1x2RrT2a1iA2GiNR5NHXz8Ff8ADrU1XQMD9R6D+U/7Qtcy3cKMBzWnRMwTyLozk7ro0tO8vgnN1gc9nbWjbt0U4l0FzjDXPcBE/QbK5aZ73qF879lLuqWtZcsmpp1NeIy3qf6XxGFu7OrjM+ExnxwutLBF4dEnPzGqOZkkjyWE9vuAMuma2AC4YW6ZmHMmXs/8iIzH6Y5q543UDnFtQ9xok+JmAB65LCcS4/X7ZjaTHdmD3nH4nRz8gOu6LjjIFkwV0NDywgtLdw4EOn/sDsfDkhAL7H7S8AbxC3D2gNuWMDqbziRuaT3c2mcdD4SF8kdaPY5zHsLXtJa5pwQRuCufUi4mQa1a47Kw93I3S/DyGnKuK1QacLnkkzFTUASrnBTqkyuZQJSVQUmwLnJavSlGrggqLHSnimsoKiV76UITnq2r0QQquvR6K8JXyZxaOZXhE98SvYu6KEJ9sWZNotWX4he1+IAhU5C8S+GPJTe6D+8LkuuVdqEGjVlB0mU46gmKVsIypb4pCWV4KaoCV1ajnClTbCEmmsAatDNN4CbL5GAqgk6k618BRlECWBgUgQpULUFyWbVRKdVL8kZNosbizbHReW/DzEhKG6PMq1tb5pEJZSlRaLTeRerRISWkgq5Dw4od5QACWMgyV8CtG60q89nqr6tRtNglx+gA3c48gFmC1br/AE0pAOrPPxhtNresOLi7/wBWKsIbpJCqTR9I4UwU2aG5A3PNzuZKQ9obsClUd/Sx58uh/ZNUXyOkLPe2LS21rE76Q35uc0fld7xHAt5GvZ+s19NrwO8Wgz1JGVd0HwDnz3HzWK9jLse7MaT32lwjr3iQtRV4sxnc+KMO6SMFv4QjK4psyi28FZxN5L3Ykwd+gx/Czr6YL4AgQXHxAiB66K84reMflh5w4c2ncD54WZq3oFcMH6g0fU/3T6kqjjuhUqlno3Ps7cBrAD4/TKz/ALc8BDx7wxsvaO+Bu5jcB3iW/t5K04NbugEmN4HrZTFwdZ3jbw3/ALIzipJpgTPkDxpUm11YcZt2sq1GgQ1r3gDoA4wFUPYvKbp0x5YGqGklXNCi0hZxkhO2964bpJX0UhJIsLvhgIlU1eyLTstBb3wKYfSa4ZCVTaKtKSwY6rTKPQsZGVd3PDgASFW+86cdFRakuEIo7XkjR4YCCka/CCCcYVxbXQAyjMuWu2ITqcim2LMfXtNJhKPprVX1sHHCDT4NMSVeOpSyScM4M52HguWy/wBnZ0XJfON4mZVleUZtQquYVZ02YlPNJHPQJ1QyiMMhFbaB2eS97GFNyj0BsWiF696KKclemmAtuQm4A0I7HFRfARrakStJ4sO5IjUcvbeoZTL7U9FFtup7otAUrYVt1CI+71YShpqVM5S0uUMpNFlZW85K1Xshdto19LzDaulk9Hz3J8MkfMLN21SAvH1pSQ1HGVjxknhn2qkyMLP+39drbdrOb3gx/wBWZJ+pYqThftq9jGtrU9ZEQ8O0uIG2oEEE+KovaTjb7mrrI0saNLGAzpbM5PMnmfLouyevFwxywrDsJ7N3nZ12YlodP4/IT/tCxjaj6tvVMvdL2ZLC/YPA/Q4c1nOGVJqR1a8fRpP4R76k17peDODI545+KOk7hkeEs2i04XTbSovl5e97g97nc3dR8lUl0XbHOPdD6Jd4NJaXfuUy1/dgCGtgAee5SfG6RD2u0mHMaJ5EiQRPXCOtK4prqiOo6z7PsBYGAgDwCpLus2ix9V5xyEiXOjDB6xlUNr7eBtJjKlFz6jWhpcHAB0YDjOQY38VmuMccqXLw54DWtnQwbNnczzceqMvyUofHkVyiRuCXuLnZLiST4kySk3016KxXB07815ny5YHKzwUl6KYXEkHMhEYwmYBOOS2TRlR6y3PIpllR7N8hD1uZpL2kB0xIjbojurgjCKtOpHTCaodFUOblZjiFPvGFaPqkDCqXOJdlVhF8lJStCrXlvNEpOJMgwmX2msSAp29i4KliKLPWVzzTlK6HJV9eg4JiwoSi6odN2Pe+rkX3LwXKeCmTB02ZCuba2L4A3XCwgq34WzSZKbU1U+DhjTeRSvYPYJOQkdLjyWo4ncN0wq+nRETCk9RIOqlHgow0jJUSwkqxrUhOBhC0wnU7ySq8ivZxum7d4Ci7K4Ulm7WQMO+uOqFqKlTtCcopZGElxWEKsANKIyllSYzKaYyEspUMetp4XrGKQqBcHyo2wr2dUwghpJjmcI7hK5lNZSpDW2x/h17oeLZvZDuvc94MufqaToEtkEQMdAoXWCPAD19l3CuEjtmVwTIc9hByIdRqQ6TtmBAUrxve+n09D7r1NFxlp3EveV+j2g3HzlGu+Ldg5odpcx1MBrHNBLnl5bInAERJUaIwU1e02FjHvgOa5paYzqB7rZjYkq043psS/mgfEfZS5De20BzXAuIZnRGCNIG2CdtlRMtQXBux/O5B9cl9m4O4voMcwyM5z1OYXlDhds55c6mGvdMlpIDpEElvwk/Jc38ZSSadeyUofJ0fI+G8Oc+q1nZvcT+loM/QZMYnZfROG/6eNhpqvIAJJa0AGD+knlnotvZ2tNg7jWjqQBJJ3JKacqw0Ix5yGOmuzNW3sZZsjVT1kc3nV9hA+ytW2lJghtNjQNoY0AfQJpxA6/RCc+Bj18lZRS4HpIQ4nwGhcMLXsaZ5xBB6g8l82497EuoNe9jy9oyBzG87b8oX0Z90dURCT4jXyA7IdieWUJaUZ8oWSXR8cpnkd0zStmuOyZ9qLE0axAENdLm4gHrGfUqutrnSfBeVJShJoeGo+y293DQl21Gyg1eIAiAUtp1ZCopJnRGe4ZvHsjxVay+DSluIa53SAYXKsYqguWTWU+ItgZC5Zr3Zy9Q2r2NufoYFwCVY2lcKjZhE7aNioy07wjzFdl4+mHuBTD6MNVZbXJbBMoz+JSoOEuAu+xdzTKg6nPJFbWaSikhNbRlLAq23RG0iF6KoleVa46o3JhtUOU405SrmSV7TuhG6Tq3vewhGErYHkfZThTc1LUbmUw2qEsk0zJAzTMo7KRUQ8JhtQJZNhijwMU2MRabgikBRcnwOlRKxvm0pLvglurwzh/yO/gUo69Y891w8OWOoRXW2tr2AfE05/p/7R4LDXFN7HFrxoMnrp8wcyvU/EvYyyppG+Y8DchV/FeItcWMb3nBwIaP1O2aD4ZWQ94dHx/Ic/sFrPZHg5ae1qDvEdwH9IP6vNdq3S+PFiSSjk+jf6cXxFJzHOaS2o9uCNwZx55Wve5pOV8N9lBVo3XZsdpDnHU5wJ1aSSPCYkcueV9cr3WPQ9FNp+q4wB4z7NDROIAKI0nmCqmxu9TA76ph1wSmaMmNupglExySHbc0QV1qDZ1w1p3HziCs3xwbR6jw6q6uawI3KrHMD3aeu3zTRQjMt7Vg1LeSAdOXSMtgGHt+cA+BXzeo8hfZ+KcP7m0gyHDqCIK+T3fDnMqPY79DonqNwfmIK4vyo01LoVeirGrdMULhwRnsAwl6sBcl3iikbWQtV4dug28TlQc9SbVAaqRb4LxleWWPaNXKgddeK8T+Jh8yBVHkLxj5IUqtIrqLSE2KOO6ZcCoNOSlwZKRqPKPQYRlS2Ugu5MK9vNQNwQurV4wli+dkYxvkWhjtUM1CVBgKOxgRpIDQB7z1XU2o7qUr1lJbcqDQakEUOheNbAQaz8YUa3MZIK6t4rhdeKqnVHSiU2uKo9JJZCoovrKuSrB9QgJDhlOIlP1wCIXM9qkK6LX2bomq57Zgdm4mN52H7/sstxCxrB5GsFsmCRP2yvoPsXZhlJ9T9T3BgPRrROPmfsFTcUtoc+ev916Wjp/8ANMpGVGa4dwRjSHP77hG+ADvhv8rVWf8AASdNmPX1HyTVs6MFdWmqFnKyztqIa6QN8q/1S2fAevwqCg/8/VW1F40EHpIPgcEKz4JItOFVgGAHqnX1PHyVDaPhuT/nl+yMLrr4x8kjWR08Fobnrhee8qmNzMCcHr+0ru2jY9IzuDshQbLCvW8fv9khbXf/ACtz1VVd3rgSPp+CErZV5fqnH8pkhWzcV7pobDo5L557YvYHhwADjLTykAAgkdc/ZbFr9Qk+sE/kLCe0bQX4JgOdHyx+FDXivG7HjlooHM5lVddplMX1yQYUaY1DfK4Ixou6Syc6k3TvlV93bvaJ5SrilZk5dsPuj3FMPgFO5RgrZJsz9OwJAMbr1aZtFoXKP8t+hKZRboT4CK04QLjITR5MkiDROU1TqgCClKDoUnNJTtZodI9uwCvbOkhPBCYtis8RoySHxbhQdbFGo1I3RDWHVQdodxiAbSgZXghPVGS2QkH0nDKH+k1GNhW0iQgm3V1w621NUXWpBSPU28BaSKhtgCVY0LAdJTTbfCbaNLUvkk+RVJCzKAGwU22+UKncy6E3rhRabd8CN5NtwqnotmN8NfnqJP5CreL2+ppcNwYP4Kf94i3pwYOhkfQevqg9uOyJjLpny6fWMr6HTVQS/pD9GbayPDfy+ikXflT1SSOhI+mECoYjzP7f2Kp0KWFF35VpbvlunocfPdUVGpifWJVnbVYeDyJE/XKouBHyN162gQen4Sr7zB+32Rb+XCfCf5VSHT68R/BWMPsqE88jP1C9dcRg5B+o6j6/ulWP5euhQrh8zn0PX2WoNnXFQknnG3Xqi2bIglBMQOfI+a6o/wCFvn9IC3ADTOvm6PFonHUgCPPu/dYXiWpxjeJz5q9mWO8Y/BVVVeNcdIC5Py5KMP2wqTTspDYE5jKD7i/VkQFo3QoXNQALk3Kiyp8iFSgdCTNOTA5J2vddw+SqWXW/VQ1bk00Zqxv5r1VD6rp3XiTwsSmJOrwvBUlK1d17ROV27VVgoLrgpuk/CFUtpyF5TpxuldND3R5WaTsuoU3DkUy2mdw0n5J6zY4HLUrnSFchAvd0KMxhO6ta+iDjKraVfMclLdfCButWMUXuAhNNfqbBGV422PxN2U6JaDlQk+wdjFreBjYR2XQfmUs5jXDCFb0w07pKTHkywc6AoV7oBpU3uAalNQdhFpxdrgnisFULvvzyVxTrhwS9xw9rhgZXlvRLTCabjJWg4SNT/uY7FjCYhgAPliPMESo0b3/jzyJBH7KmqNlpjln5eoROGuL+4Ae8CR5tk8tsL1tDU3QX6opHMbHO2BdI9c/4Q7k4lc6gWnwgfUxP4+6jUdj/AD/C6E8CtZAmqc/OPXnCetq56+pVY9vOPOcAeZKLbu5n1zQi3YZJUaGnWmZO6QGJ8yP2XtF/rzBP4S9xVAceo/j19VVskkHa7dDfXyfl6+yVfdchySxrb4x+PyPFK5oZRY413emZJ5bf5XXNx39PNob9yf8A5SjKgmdgOv0KouHcQ7SpUfPxOMT/AEjb7fuklOkPGNs14qk4Hj9cQkHvhx6yUezriI6qvv6n/I6Ov4XH+ct0E17FUc0MvqlLXbyvWGd0V7AQvNi3wwqJV1qncJ8CqlgJbM/JW9+Bp0hVDaLiNIXZBLaVqhTtCuRuyI/SuVMAoA6mpstzuruhw4aId8QSpaG4Syk0SjlgHU3aZhDoNLjEZWltdGjMSqK7ljtTUua/YW7dF1wtpaIc0oV7dBjtsZRbHioczIyg8SuWFp1QsoqqFd3k4va5uppxCXpWzX/Cqi3uNJOk91afhejRqETuk8TTpGbohQoVGADdqn7hqM8pQ7vjBBADcTura2uW6NSEohjzkDVpsptxuqwycjCcpgVHEzhGqMYMLnl8R2kxGgXc8rx7wyTsnRQ0tJBWbq3eusGHDSYVI6cpY6JqNssqXECTgSFYs74luUzcCjRoyY2WPpcdcHktA0k88Kn8dPoptrk0lKqWO720EHxBUbd5pXDHNAiTkgQWPGRjmQSMneMFVzro1GqwvaDhQpOdvoaTjkfhzyMEK+hai4+shg0pV7OfxeHEHIyZ5ZjlvyH7L33wPaTyPKc777b4VE8d9nQk+RJ6/NNVKTphgxg/RUc5LBZxiWLHNnfP/iJ+v8JtrfXgqu1e5pjUY6K3pOHLwiRBJ6xiAujRluRHUwM0nc/H9pEJHilTvyOg5jcYVpQA26z81kru6Ook9TE+ZT60tsULpR3Msmd7OQPX0UyzEjIGcQY6rPHiMH4o+ZRGcVj4OfxdD4gKCn7RZ6b6LHid61jDEB0Yj+rqR02Wd4NVMluNxsAN+WPJRv6s/f6oPCHw4jrn6f5WbtDKO02nDyBAIM7Z/CVrVJcT4leUa2hjnuMNaMTyccD7kJG3umuySk1cxSEjFOTLBlZO0jIyqptZoTlGqD5LinCshlGsit62DhG4ZbxJcMp/s2FGZTELQnX2ZoyT5KutTEnC5P6QuT+WHsffEhXIIlI2vD2lxLsg7LxcqSzJHFHgXv7Tszqae70SF7etLQQMrlyySbyP0gNlU1EgYXCoNRa/IXLkaW5isSuXhjyG7FN2l25rcc1y5UfCC+EWdNwLM5KsOHZAbK8XLjn9v9MvqTvn9kJakbS6c+cfdeLkXFZ/YiPL+rUa05idoKqOH25e6ZgzuuXKunwx48ltf0C5mlziY2VObAjI2XLk6k6M29xc8Oc1tPIyVpOKVA6gwjbs2N+bW6T9wuXJtDljrlGOqCHNI5OH7ynXXvRcuWlyXYFnEDq9FXHBqpfrmTGRJ5GMLxcq6P2Jz+rLek7E8/4P8FUXH+81jhy1DYDnjbwXLlXW+pPS5MtWomZiB8kdoDGtJyXSfIeiuXKB1dEHM1AnnBKBw/FQYknxwuXLR7B0aykS6kYAJgd13wkAiRscRyhZO6qNBgOkjcNaQwHnk5InlC5cq9Iivsx2xfiSm6dcyuXLk1BpcFnaXEp1lwuXLztRKznZ52q5cuU6QT//2Q=="
                                    className="w-100 img-fluid rounded-start"
                                    alt="..."
                                />
                            </div>
                            <div className="col-md-6">
                                <div className="card-body text-center">
                                    <h3 className="card-title">Vendor's Details</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="card">
                    <div className="card-header text-center">
                        <h1>
                            Product Details
                        </h1>
                    </div>
                    <div className="card-body text-start">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>Title</td>
                                    <td>Otto</td>
                                </tr>
                                <tr>
                                    <td>City</td>
                                    <td>Thornton</td>
                                </tr>
                                <tr>
                                    <td>Price</td>
                                    <td>Thornton</td>
                                </tr>
                                <tr>
                                    <td>Details</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <td>Description</td>
                                    <td>@fat</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary w-50 primaryColor">Add to Cart</button>
                    </div>
                    {/* <div className="card-footer text-muted">
                        2 days ago
                    </div> */}
                </div>
            </div>


        </div>
    )
}

export default BuyerProductDetails
