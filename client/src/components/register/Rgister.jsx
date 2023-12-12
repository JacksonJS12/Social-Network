import { Link } from "react-router-dom";

export default function Register() {
    return (
        <div className="login_form_container">
            <div className="pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 mx-auto">
                            <div className="card card-body">
                                <h1 className="text-center">Register</h1>
                                <form
                                    id="submitForm"
                                    action="/login"
                                    method="post"
                                    data-parsley-validate=""
                                    data-parsley-errors-messages-disabled="true"
                                    novalidate=""
                                    _lpchecked="1"
                                >
                                    <input
                                        type="hidden"
                                        name="_csrf"
                                        value="7635eb83-1f95-4b32-8788-abec2724a9a4"
                                    />
                                    <div className="form-group required">
                                        <label for="gmail">Email</label>
                                        <input
                                            type="text"
                                            className="form-control text-lowercase"
                                            id="gmail"
                                            required=""
                                            name="gmail"
                                        />
                                    </div>
                                    <div className="form-group required">
                                        <label
                                            className="d-flex flex-row align-items-center"
                                            for="password"
                                        >
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            required=""
                                            id="password"
                                            name="password"
                                        /><span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span>
                                    </div>
                                    <div className="form-group required">
                                        <label
                                            className="d-flex flex-row align-items-center"
                                            for="password"
                                        >
                                            Confirm Password
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            required=""
                                            id="password"
                                            name="password"
                                        />
                                    </div>
                                    <div className="form-group mt-4 mb-4">
                                        <div className="custom-control custom-checkbox">
                                            <input
                                                type="checkbox"
                                                className="custom-control-input"
                                                id="remember-me"
                                                name="remember-me"
                                                data-parsley-multiple="remember-me"
                                            />
                                            <label
                                                className="custom-control-label"
                                                for="remember-me"
                                            >
                                                Remember me?
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form-group pt-1">
                                        <button
                                            className="btn btn-primary btn-block"
                                            type="submit"
                                        >
                                            Register
                                        </button>
                                    </div>
                                </form>
                                <p className="small-xl pt-3 text-center">
                                    <span className="text-muted">
                                        Already a member?
                                    </span>
                                    <Link to="/login"> Log in</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
