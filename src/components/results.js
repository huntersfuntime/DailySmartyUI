import React, { Component } from 'react';
import Logo from './logo';
import Searchbar from './searchBar';

class Results extends Component {

    handleSearchBarSubmit(query) {
        
    }
    render() {
        return (
            <div>
                <Logo size={55}/>
                <Searchbar onSubmit={(query) => this.handleSearchBarSubmit(query)}/>
            </div>
        )
    }
}

export default Results;