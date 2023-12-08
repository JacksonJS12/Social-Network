export default function HomeSlider() {
    return (
        <section className="slider_section position-relative">
            <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
            >
                <ol className="carousel-indicators">
                    <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="0"
                        className="active"
                    ></li>
                    <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="1"
                    ></li>
                    <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="2"
                    ></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-4 offset-md-2">
                                    <div className="slider_detail-box">
                                        <h1>
                                            Cat needs
                                            <span>Care and Attention</span>
                                        </h1>
                                        <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry. Lorem Ipsum has been the
                                            industry's standard dummy text ever
                                        </p>
                                        <div className="btn-box">
                                            <a href="" className="btn-1">
                                                Learn more
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6"></div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-4 offset-md-2">
                                    <div className="slider_detail-box">
                                        <h1>
                                            Cat needs
                                            <span>Food and Water</span>
                                        </h1>
                                        <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry. Lorem Ipsum has been the
                                            industry's standard dummy text ever
                                        </p>
                                        <div className="btn-box">
                                            <a href="" className="btn-1">
                                                Learn more
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6"></div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-4 offset-md-2">
                                    <div className="slider_detail-box">
                                        <h1>
                                            Cat needs
                                            <span>Grooming and Toys</span>
                                        </h1>
                                        <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry. Lorem Ipsum has been the
                                            industry's standard dummy text ever
                                        </p>
                                        <div className="btn-box">
                                            <a href="" className="btn-1">
                                                Learn more
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="slider_img-box"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </section>
    );
}
