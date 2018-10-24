import React from "react";

class GithubPopupItem extends React.Component {
    render() {
        const { id, name, html_url } = this.props.repo;
        return (
            <li key={id} className="github-list-item">
                <a href={html_url} target="_blank">{name}</a>
            </li>
        );
    }
}

export default GithubPopupItem;