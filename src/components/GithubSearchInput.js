import React from "react";

function GithubSearchInput(props) {
    return (
        <div className="search">
            <p>Search for Github User</p>
            <div className='form-group mx-sm-3 mb-2 mt-4'>
                <input
                    type="text"
                    placeholder="Enter a name"
                    onChange={e => {
                        props.onChange(e.target.value);
                    }}
                    value={props.value}
                />
            </div>
            <button className="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off"
                onClick={props.onButtonClick}>Search</button>
        </div>
    );
}

export default GithubSearchInput;
