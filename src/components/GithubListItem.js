import React from "react";
import GithubPopup from "./GithubPopup";
import GithubAvatar from "./GithubAvatar";

class GithubListItem extends React.Component {
    render() {
        const { id, login, html_url, avatar_url } = this.props.githubItem;
        return (
            <li key={id} className="github-list-item">
                <a href={html_url} target="_blank">
                    <GithubAvatar src={avatar_url} />
                    <p>{login}</p>
                </a>
                <GithubPopup info={this.props.githubItem} />
            </li>
        );
    }
}

export default GithubListItem;
