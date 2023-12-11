export default function Create() {
    return (
        <div className="form_container_create">
            <section id="create-page" className="auth">
                <form id="create">
                    <div className="container">
                        <h1>Create Post</h1> 
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
                            id="category"
                            name="category"
                            placeholder="Enter category..."
                        />

                        <input
                            type="text"
                            id="imageUrl"
                            name="imageUrl"
                            placeholder="Upload a photo..."
                        />

                        <textarea
                            name="summary"
                            id="summary"
                            cols="40"
                            rows="3"
                            placeholder="Summary..."
                        ></textarea>
                        <input
                            className="btn-submit"
                            id="submit"
                            type="submit"
                            value="Create Post"
                        />
                    </div>
                </form>
            </section>
        </div>
    );
}
