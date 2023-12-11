export default function Login() {
    return (
        <div className="form_container ">
            <section id="login-page" className="auth">
                <form id="create">
                    <div className="container">
                        <h1>Login</h1>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Enter username..."
                        />
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Enter title..."
                        />
                        <input
                            type="text"
                            id="password"
                            name="password"
                            placeholder="password title..."
                        />
                        <input
                            className="btn-submit"
                            id="submit"
                            type="submit"
                            value="Login"
                        />
                    </div>
                </form>
            </section>
        </div>
    );
}
