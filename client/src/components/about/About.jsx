export default function About() {
    return (
        <section className="about_section layout_padding">
            <div className="container" id="about_page">
                <div className="row">
                    <div className="col-md-6">
                        <div className="img-box">
                            <img src="images/about.png" alt="about pic" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="detail-box">
                            <h2 className="custom_heading">
                                About Our Cat
                                <span>Blog</span>
                            </h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                theLorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever
                                since the
                            </p>
                            <div>
                                <a href="/about/more">About More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
