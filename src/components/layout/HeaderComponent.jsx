import React, { Component } from "react";

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="hero_area">
                <div className="bg-box">
                    <img src="/images/hero-bg.jpg" alt="" />
                </div>
                <header className="header_section">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg custom_nav-container ">
                        <a className="navbar-brand" href="index.html">
                            <span>
                            Foody
                            </span>
                        </a>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className=""> </span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="menu.html">Menu</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="about.html">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="book.html">Book Table</a>
                            </li> */}
                            </ul>
                            <div className="user_option ml-auto">
                                <a href="" className="user_link">
                                    <i className="fa fa-user" aria-hidden="true"></i>
                                </a>
                                <a className="cart_link" href="#">
                                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                </a>
                                <form className="form-inline">
                                    <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                                    <i className="fa fa-search" aria-hidden="true"></i>
                                    </button>
                                </form>
                                <a href="" className="order_online">
                                    Order Online
                                </a>
                            </div>
                        </div>
                        </nav>
                    </div>
                </header>
                <section className="slider_section ">
                    <div id="customCarousel1" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="container ">
                            <div className="row">
                                <div className="col-md-7 col-lg-6 ">
                                <div className="detail-box">
                                    <h1>
                                    Fast Food Restaurant
                                    </h1>
                                    <p>
                                    The website or app displays an extensive menu featuring a variety of fast food options such as burgers, pizzas, sandwiches, fried chicken, salads, desserts, and beverages. 
                                    </p>
                                    <div className="btn-box">
                                    <a href="" className="btn1">
                                        Order Now
                                    </a>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="carousel-item ">
                            <div className="container ">
                            <div className="row">
                                <div className="col-md-7 col-lg-6 ">
                                <div className="detail-box">
                                    <h1>
                                    Fast Food Restaurant
                                    </h1>
                                    <p>
                                    Customers browse through the online menu and select the items they wish to order. They can customize their orders by specifying preferences like toppings, sauces, or sides.
                                    </p>
                                    <div className="btn-box">
                                    <a href="" className="btn1">
                                        Order Now
                                    </a>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container ">
                            <div className="row">
                                <div className="col-md-7 col-lg-6 ">
                                <div className="detail-box">
                                    <h1>
                                    Fast Food Restaurant
                                    </h1>
                                    <p>
                                    Depending on the resto's services, the customer can either opt for home delivery or choose to pick up the order from a nearby outlet. If delivery is chosen, the customer receives updates on the status of their order until it arrives at their doorstep.
                                    </p>
                                    <div className="btn-box">
                                    <a href="" className="btn1">
                                        Order Now
                                    </a>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="container">
                        <ol className="carousel-indicators">
                            <li data-target="#customCarousel1" data-slide-to="0" className="active"></li>
                            <li data-target="#customCarousel1" data-slide-to="1"></li>
                            <li data-target="#customCarousel1" data-slide-to="2"></li>
                        </ol>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default HeaderComponent