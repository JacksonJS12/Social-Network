export default function Create() {
    return (
        <div className="form_container ">
            <div className="row">
                <div className="col-md-8 col-sm-10 offset-md-4">
                    <section id="create-page" className="auth">
                    <form id="create">
                        <div className="text-center">
                            <h3>Contact Us</h3>
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Name"
                                className="pt-3"
                            />
                        </div>
                        <div>
                            <input type=" text" placeholder="Pone Number" />
                        </div>
                        <div>
                            <input type="email" placeholder="Email" />
                        </div>
                        <div>
                            <input
                                type="text"
                                className="message-box"
                                placeholder="Message"
                            />
                        </div>
                        <div className="d-flex justify-content-center">
                            <button>SEND</button>
                        </div>
                    </form>
                    </section>
                </div>
            </div>
        </div>
    );
}
