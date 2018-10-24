import React from "react";
import { fetchGithub } from "../api";
import GithupPopupItem from "./GithubPopupItem";

class GithubRepoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { userRepo: [] };
        fetchGithub(this.props.repos_url).then(body => {
            this.setState({ userRepo: body });
        });
    }

    render() {
        const { userRepo } = this.state;
        return (
            <div className="content">
                <p>Repositories:</p>

                <ul className="repo-list">
                    {userRepo.map(repo => {
                        return <GithupPopupItem key={repo.id} repo={repo} />;
                    })}
                </ul>

            </div>
        );
    }
}
export default GithubRepoList;
