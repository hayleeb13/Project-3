import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import Nav from "../Nav/index.js";

class Recipes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {

        fetch('https://api.edamam.com/search?q=health&app_id=$0aabe95f&app_key=$33aea1f1fe7592d8eecab3f7bfab5efb&from=0&to=3&diet=balanced')
            .then(res => res.json())
            .then(result => {
                this.setState({
                    isLoaded: true,
                    items: [...this.state.items, result.items],
                })
            });

    }

    render() {

        var { isLoaded, items } = this.state;

        if (!isLoaded) {
            return <div>Loading...</div>
        }

        else {

            return (
                <div className="Recipe">
                    
                    <ul>
                        {/* {items.map(item => ( */}
                            <li key={ items.recipe }>
                                Label: {items.label} | Image: {items.image} | Source: {items.source} | URL: {items.url}
                            </li>
                        {/* )) */}
                    </ul>

                </div>
            );
        }
    }
}

export default Recipes;