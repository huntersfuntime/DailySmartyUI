import React, { Component } from 'react';
import Logo from './logo';
import Searchbar from './searchBar';

class Results extends Component {
    render() {
        return (
            <div>
                <Logo size={55}/>
                <Searchbar />
            </div>
        )
    }
}

export default Results;