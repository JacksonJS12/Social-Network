export default function Create() {
    return (
        <div className="form_container ">
            <section id="create-page" className="auth">
                <form id="create">
                    <div className="text-center">
                        <h3>Contact Us</h3>
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Username"
                            className="pt-3"
                        />
                    </div>
                    <div>
                        <input type="phone" placeholder="Phone Number" />
                    </div>
                    <div>
                        <input type="email" placeholder="Email" />
                    </div>
                    <div>
                        <input
                            type="text"
                            className="imgUrl"
                            placeholder="Image URL"
                        />
                    </div>
                    <div htmlFor="summary">Summary:</div>
                    <textarea name="summary" id="summary"></textarea>
        
                    <div className="d-flex justify-content-center">
                        <button>SEND</button>
                    </div>
                </form>
            </section>
        </div>
    );
}
