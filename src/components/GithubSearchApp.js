import React from "react";
import GithubList from "./GithubList";
import GithubSearchInput from "./GithubSearchInput";
import { fetchGithub } from "../api";

class GithubSearchApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchKeyword: "", githubData: [] };
        this.search = this.search.bind(this);
        this.changeValue = this.changeValue.bind(this);
    }

    changeValue(searchKeyword) {
        this.setState({ searchKeyword });
    }

    search() {
        const searchKeyword = this.state.searchKeyword;
        if (searchKeyword === "") {
            this.setState({ githubData: [] });
            return;
        } else {
            const url = `https://api.github.com/search/users?q=${searchKeyword}`
            fetchGithub(url).then(body => {
                this.setState({ githubData: body.items, searchKeyword: "" });
            });
        }
    }

    render() {
        const { searchKeyword, githubData } = this.state;
        return (
            <div className="gitMain">
                <GithubSearchInput
                    onButtonClick={this.search}
                    searchKeyword={searchKeyword}
                    onChange={this.changeValue}
                    value={this.state.searchKeyword}
                />
                <GithubList githubData={githubData} />
            </div>
        );
    }
}

export default GithubSearchApp;
