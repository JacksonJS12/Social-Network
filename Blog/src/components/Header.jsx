import React from "react";

export default function Header() {
    const onBlur = () => {
        if(this.value=='') this.value='search...';
    }
    const onFocus = () => {
        if(this.value=='search...') this.value='';
    }
    return (
        <div id="header">
            <div className="f_search">
                <form method="post" action="http://www.free-css-com/">
                    <p>
                        <input
                            type="text"
                            name="search"
                            defaultValue="search..."
                            className="search"
                            onBlur={onBlur}
                            onFocus={onFocus}
                        />
                        <input
                            type="submit"
                            defaultValue="Go"
                            className="submit"
                        />
                    </p>
                </form>
            </div>
            <div className="title">
                <h1>Cat Community Blog</h1>
                <h2>You love cats? You're in the right place!</h2>
            </div>
        </div>
    );
}
