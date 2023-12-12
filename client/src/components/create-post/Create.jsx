import {Link} from 'react-router-dom'

export default function Create() {
    return (
        <div className="create_form_container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 mx-auto">
                            <div className="card card-body">
                                <h1 className="text-center">Create Post</h1>
                                <form
                                    id="submitForm"
                                    action="/create"
                                    method="post"
                                    data-parsley-validate=""
                                    data-parsley-errors-messages-disabled="true"
                                    novalidate=""
                                    _lpchecked="1"
                                >
                                   
                                    <div className="form-group required">
                                        <label for="gmail">Email</label>
                                        <input
                                            type="text"
                                            className="form-control text-lowercase"
                                            id="gmail"
                                            name="gmail"
                                        />
                                    </div>
                                    <div className="form-group required">
                                        <label for="title">Title</label>
                                        <input
                                            type="text"
                                            className="form-control text-lowercase"
                                            id="title"
                                            name="title"
                                        />
                                    </div> 
                                    <div className="form-group required">
                                        <label for="imgUrl">Image URL</label>
                                        <input
                                            type="text"
                                            className="form-control text-lowercase"
                                            id="imgUrl"
                                            name="imgUrl"
                                        />
                                    </div>
                                    <div className="form-group required">
                                        <label for="text">Text</label>
                                        <textarea
                                            type="text"
                                            className="form-control text-lowercase"
                                            id="img-url"
                                            name="img-url"
                                        />
                                    </div>
                                    <div className="form-group pt-1">
                                        <button
                                            className="btn btn-primary btn-block"
                                            type="submit"
                                        >
                                            Create  
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}
