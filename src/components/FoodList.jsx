import React, { Component } from "react";
import "./FoodList.scss";
import foods from '../data/fodmap_repo.json';
import { Link } from "react-router-dom";

class FoodList extends Component {
    constructor(props) {
        super(props);
        this.newSearch = this.newSearch.bind(this)
    }

    state = {
        list: foods
    }

    newSearch(e) {
        e.preventDefault();
        if (e.target.value !== ''){
            let search = e.target.value;
            let searchResults = this.state.list.filter((e) => {
                return e.name.toLowerCase().includes(search.toLowerCase());
            });
            this.setState({
                list: searchResults
            })
        } else {
            this.setState({
                list: foods
            })
        }
    };

    render() {
        let sortedList = [].concat(this.state.list)
        .sort((a, b) => a.name > b.name ? 1 : -1)

        return (
            <div className="wrapper">
                <input
                    type="text"
                    className="search-bar"
                    name="search"
                    onChange={this.newSearch}
                />
                <div className="list">
                {
                    sortedList.map((food, index) =>
                    <li>
                        <Link
                            to={`/foods/detail/${food.id}`}
                            index={`${index}-${food.name}`}
                            name={food.name}>
                                {food.name}
                        </Link>
                    </li>
                )
            }
            </div>
        </div>
        );
    }
}

export default FoodList;
