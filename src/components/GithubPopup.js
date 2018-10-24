import React from "react";
import Popup from "reactjs-popup";
import GithubAvatar from "./GithubAvatar";
import GithubRepoList from "./GithubRepoList";

class GithubPopup extends React.Component {
    render() {
        const { avatar_url, login, repos_url } = this.props.info;
        return (
            <div className="modal">
                <Popup
                    trigger={<button className="button"> More details </button>}
                    modal
                    closeOnDocumentClick
                >
                    <GithubAvatar src={avatar_url} />
                    <p>Login name: {login}</p>
                    <GithubRepoList repos_url={repos_url} />
                </Popup>
            </div>
        );
    }
}
export default GithubPopup;
