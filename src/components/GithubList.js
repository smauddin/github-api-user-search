import React from "react";
import GithubListItem from "./GithubListItem";

function GithubList(props) {
    const { githubData } = props;
    return (
        <div className="github-list">
            <ul className="github-list-ul">
                {githubData.map(github => (
                    <GithubListItem key={github.id} githubItem={github} />
                ))}
            </ul>
        </div>
    );
}

export default GithubList;
